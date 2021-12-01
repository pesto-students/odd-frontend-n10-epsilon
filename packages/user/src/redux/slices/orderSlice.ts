import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Values } from "../../organisms/address-info-form-card/AddressInfoFormCard";
interface MyData {
  // ...
}
interface MyKnownError {
  errorMessage: string;
  // ...
}
interface OrderAttributes {
  pickup_info: Values;
  drop_off_info: Values;
  first_name: string;
  last_name: string;
  email: string;
}

const createOrder = createAsyncThunk<
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  OrderAttributes,
  // Types for ThunkAPI
  {
    extra: {
      jwt: string;
    };
    rejectValue: MyKnownError;
  }
>("users/get", async (user, thunkApi) => {
  const {  ...userData } = user;
  const response = await fetch(`https://reqres.in/api/users`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
    body: JSON.stringify(userData),
  });
  if (response.status === 400) {
    // Return the known error for future handling
    return thunkApi.rejectWithValue((await response.json()) as MyKnownError);
  }
  return (await response.json()) as MyData;
});

// type SliceState = { state: "loading" } | { state: "finished"; data: string };

// First approach: define the initial state using that type
// const initialState: SliceState = { state: "loading" };

const Order = createSlice({
  name: "users",
  initialState: {
    entities: {},
    error: null,
  },
  reducers: {
    start(state, actions) {
      state.entities = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.entities = {};
    });
     builder.addCase(createOrder.pending, (state, { payload }) => {
       state.entities = {};
     });
    builder.addCase(createOrder.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
      } else {
      }
    });
  },
});

export const { start } = Order.actions;

export default Order.reducer;
