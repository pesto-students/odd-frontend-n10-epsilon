import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getApi } from "../../api-call";
import { API } from "../../constant/Endpoints";

export interface Location {
  type: string;
  coordinates: number[];
}
export interface Driver {
  location?: Location;
  _id?: string;
  mobile_number?: number;
  otp_verify?: any;
  address?: string;
  image?: string;
  city?: string;
  state?: string;
  country?: string;
  driver_status?: string;
  isOnline?: boolean;
  doc?: Doc[];
  first_name?: string;
  last_name?: string;
  languages?: string;
  city_postal_code?: string;
  document_submitted?: boolean;
  profile_completed?: boolean;
}

export interface Doc {
  type: string;
  status: string;
  path: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const DOC = {
  profile_photo: {
    title: "Profile Photo",
    name: "profile_photo",
    content:
      "Your face must be clearly visible. You must not wear any Hat, Sunglasses or anything that obscure your face.",
    completed: false,
    img: require("../../assets/profile.png").default,
    url: null as string | null,
  },
  aadhar_card: {
    title: "Submit Aadhaar Card",
    name: "aadhar_card",
    content:
      "Submit Photo of your Aadhaar Card. Image must not be blurry. Details must be visible clearly.",
    completed: false,
    img: require("../../assets/dummy-doc.svg").default,
    url: null as string | null,
  },
  pan_card: {
    title: "Submit Pan Card",
    name: "pan_card",
    content:
      "Submit Photo of  your Pan Card. Image must not be blurry. Details must be visible clearly.",
    completed: false,
    img: require("../../assets/pancard.png").default,
    url: null as string | null,
  },
  driving_licence: {
    title: "Driving License",
    name: "driving_licence",
    content:
      "Submit Photo of  your Driving License. Image must not be blurry. Details must be visible clearly.",
    completed: false,
    img: require("../../assets/registration.svg").default,
    url: null as string | null,
  },
  vehicle_insurance: {
    title: "Vehicle Insurance",
    name: "vehicle_insurance",
    completed: false,
    img: require("../../assets/insrance.png").default,
    url: null as string | null,
  },
  registration_card: {
    title: "Registration Certificate (RC)",
    content:
      "Submit Photo of  your Registration Certificate (RC). Image must not be blurry. Details must be visible clearly.",
    name: "registration_card",
    completed: false,
    img: require("../../assets/transport-ministry.png").default,
    url: null as string | null,
  },
  vehicle_type: {
    title: "Select Vehicle Type",
    content:
      "Submit Photo of  your Registration Certificate (RC). Image must not be blurry. Details must be visible clearly.",
    name: "registration_card",
    completed: false,
    _id: null as string | null,
  },
};

export const toggleMode = createAsyncThunk(
  "driver/toggle_mode",
  async (currentState: boolean) => {
    const id = toast.loading(`${currentState ? "You are going offline..." : "You are going online..."}`);
    try {
      const api = API.DRIVER_ENDPOINTS.TOGGLE_MODEL;
      const result = await getApi(api);
      return result.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(id);
      return {};
    }
  }
);

const Reducer = createSlice({
  name: "driver",
  initialState: {
    state: {} as Driver,
    doc: DOC,
    vehicle: [],
    docFetch: false,
    isOnline: false,
  },
  reducers: {
    addInfo: (state, actions) => {
      state.state = actions.payload;
      state.isOnline = actions.payload.isOnline;
    },
    updateDoc: (state, actions) => {
      const type = actions.payload.type as
        | "aadhar_card"
        | "driving_licence"
        | "pan_card"
        | "profile_photo"
        | "registration_card"
        | "vehicle_insurance";
      state.doc[type].completed = true;
      state.doc[type].url = actions.payload.path;
    },
    addVehicle: (state, actions) => {
      state.doc.vehicle_type.completed = true;
      state.doc.vehicle_type._id = actions.payload._id;
    },
    addVehicleList: (state, actions) => {
      state.vehicle = actions.payload;
    },
    setValue: (state, action) => {
      if (action.payload.vehicle_id) {
        state.doc.vehicle_type.completed = true;
        state.doc.vehicle_type._id = action.payload.vehicle_id;
      }
      if (action.payload.image) {
        state.doc.profile_photo.completed = true;
        state.doc.profile_photo.url = action.payload.image;
      }
      action.payload.doc.forEach((doc: any) => {
        const { type, path } = doc as {
          type:
          | "aadhar_card"
          | "driving_licence"
          | "pan_card"
          | "profile_photo"
          | "registration_card"
          | "vehicle_insurance";
          path: string;
        };
        state.doc[type].completed = true;
        state.doc[type].url = path;
      });
      state.docFetch = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleMode.fulfilled, (state, { payload }) => {
      if (payload && payload.isOnline) {
        state.isOnline = payload.isOnline;
      }
    });
    builder.addCase(toggleMode.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        // state.error = action.payload.errorMessage;
      } else {
        // state.error = action.error;
      }
    });
  },
});

export const { addInfo, updateDoc, addVehicle, addVehicleList, setValue } =
  Reducer.actions;

export default Reducer.reducer;
