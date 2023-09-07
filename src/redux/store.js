import { configureStore } from "@reduxjs/toolkit";
import globalFeature from "./features/global.feature";
import brandFeature from "./features/brand.feature";
import heroFeature from "./features/hero.feature";
import serviceFeature from "./features/service.feature";
import experienceFeature from "./features/experience.feature";
import testimonialFeature from "./features/testimonial.feature";
import developerFeature from "./features/developer.feature";
import blogFeature from "./features/blog.feature";

export const store = configureStore({
  reducer: {
    globalFeature,
    heroFeature,
    brandFeature,
    serviceFeature,
    experienceFeature,
    testimonialFeature,
    developerFeature,
    blogFeature,
  },
});
