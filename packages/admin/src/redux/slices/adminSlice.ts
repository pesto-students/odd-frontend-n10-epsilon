import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface MyData {
  // ...
}
interface MyKnownError {
  errorMessage: string;
  // ...
}
interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

const updateUser = createAsyncThunk<
  // Return type of the payload creator
  MyData,
  // First argument to the payload creator
  UserAttributes,
  // Types for ThunkAPI
  {
    extra: {
      jwt: string;
    };
    rejectValue: MyKnownError;
  }
>("users/get", async (user, thunkApi) => {
  const { id, ...userData } = user;
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
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

const usersSlice = createSlice({
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
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.entities = {};
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
      } else {
      }
    });
  },
});

export const { start } = usersSlice.actions;

export default usersSlice.reducer;
