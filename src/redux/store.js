import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/blogSlice";
import brandFeature from "./features/brandSlice";
import globalFeature from "./features/globalSlice";
import heroFeature from "./features/heroSlice";
import serviceSlice from "./features/servicesSlice";
import teamSlice from "./features/teamSlice";
import testimonialSlice from "./features/testimonialSlice";
export const store = configureStore({
  reducer: {
    heroFeature,
    brandFeature,
    globalFeature,
    serviceSlice,
    testimonialSlice,
    teamSlice,
    blogSlice
  },
});
