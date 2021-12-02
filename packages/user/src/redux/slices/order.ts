import { createSlice } from "@reduxjs/toolkit";
import { Values } from "../../organisms/address-info-form-card/AddressInfoFormCard";

export interface OrderAttributes {
  pickup_info: Values;
  drop_off_info: Values;
  vehicle_id: string | null;
  vehicle: Vehicle;
  fare: Vehicle[];
}

 interface Vehicle {
  _id: string;
  name: string;
  recommendation: string;
  base_fare: number;
  per_km: number;
  status: string;
  totalKm: number;
  estimate_fare: number;
}

const Order = createSlice({
  name: "users",
  initialState: {
    pickup_info: {},
    drop_off_info: {},
    vehicle_id: null,
  } as OrderAttributes,
  reducers: {
    addPickupInfo: (state, actions) => {
      state.pickup_info = actions.payload;
    },
    addDropOffInfo: (state, actions) => {
      state.drop_off_info = actions.payload;
    },
    addVehicle: (state, actions) => {
      state.vehicle = actions.payload;
      state.vehicle_id = actions.payload._id;
    },
    addFare:(state, actions) => {
      state.fare = actions.payload;
    }
  },
});

export const { addPickupInfo, addDropOffInfo, addVehicle, addFare } = Order.actions;

export default Order.reducer;
