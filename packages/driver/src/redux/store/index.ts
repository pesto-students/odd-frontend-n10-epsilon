import { configureStore } from "@reduxjs/toolkit";

import driver from "../slices/driver";
import order from "../slices/order";

export default configureStore({
  reducer: {
    driver,
    order
  },
});
