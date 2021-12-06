import { configureStore } from "@reduxjs/toolkit";

import driver from "../slices/driver";

export default configureStore({
  reducer: {
    driver,
  },
});
