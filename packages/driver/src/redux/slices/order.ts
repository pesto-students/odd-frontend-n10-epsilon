import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getApi } from "../../api-call";
import { API } from "../../constant/Endpoints";

interface Values {
  add_1: string;
  add_2: string;
  contact_person_number: string;
  contact_person_name: string;
  instruction: string;
  complete_address: string;

  location: { coordinates: number[] };
}

export interface OrderAttributes {
  pickup_info: Values;
  drop_off_info: Values;
  fare: number;
  status: string;
  haveCurrent: boolean;
  _id: string;
}
export const fetchCurrentOrder = createAsyncThunk(
  "order/fetchCurrentOrder",
  async () => {
    const api = API.DRIVER_ENDPOINTS.GET_CURRENT_ORDER;
    const id = toast.loading("Please wait...");
    const order = await getApi(api);
    toast.dismiss(id);
    return order.data.data;
  }
);

const Order = createSlice({
  name: "order",
  initialState: {
    pickup_info: {},
    drop_off_info: {},
    fare: 0,
    haveCurrent: false,
    status: "",
    _id: "",
  } as OrderAttributes,
  reducers: {
    currentOrder: (state, actions) => {
      state.pickup_info = actions.payload.pickup_info;
      state.drop_off_info = actions.payload.drop_off_info;
      state.fare = actions.payload.fare;
      state.status = actions.payload.status;
      state._id = actions.payload._id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentOrder.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.pickup_info = payload.pickup_info;
      state.drop_off_info = payload.drop_off_info;
      state.fare = payload.fare;
      state.haveCurrent = true;
      state.status = payload.status;
      state._id = payload._id;
      state.haveCurrent = true;
    });
    builder.addCase(fetchCurrentOrder.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        // state.error = action.payload.errorMessage;
      } else {
        // state.error = action.error;
      }
    });
  },
});

export const { currentOrder } = Order.actions;

export default Order.reducer;
