import { configureStore } from "@reduxjs/toolkit";
import brandFeature from "./features/brand.feature";
import globalFeature from "./features/global.feature";
import heroFeature from "./features/hero.feature";
import serviceFeature from "./features/service.feature";

export const store = configureStore({
  reducer: {
    heroFeature,
    brandFeature,
    serviceFeature,
    globalFeature,
  },
});
