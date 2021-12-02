import { configureStore } from "@reduxjs/toolkit";

import order from "../slices/order";


export default configureStore({
  reducer: {
    order: order,
  },
});
