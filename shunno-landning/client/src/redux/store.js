import { configureStore } from "@reduxjs/toolkit";
import brandFeature from "./features/brand.feature";
import globalFeature from "./features/global.feature";
import heroFeature from "./features/hero.feature";

export const store = configureStore({
  reducer: {
    heroFeature,
    brandFeature,
    globalFeature,
  },
});
