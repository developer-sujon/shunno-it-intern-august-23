//External import
import { configureStore } from '@reduxjs/toolkit';

//Internal Import
import settingReducer from './slice/settingReducer';
import authReducer from './slice/authReducer';
import { authService } from './services/authService';
import { profileService } from './services/profileService';
import { staffService } from './services/staffService';
import { categoryService } from './services/categoryService';
import { agentService } from './services/agentService';
import { departmentService } from './services/departmentService';
import { priorityService } from './services/priorityService';
import { notificationService } from './services/notificationService';
import { roleService } from './services/roleService';
import { clientService } from './services/clientService';
import { ticketService } from './services/ticketService';

const store = configureStore({
  reducer: {
    authReducer,
    settingReducer,
    [authService.reducerPath]: authService.reducer,
    [profileService.reducerPath]: profileService.reducer,
    [staffService.reducerPath]: staffService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [agentService.reducerPath]: agentService.reducer,
    [departmentService.reducerPath]: departmentService.reducer,
    [priorityService.reducerPath]: priorityService.reducer,
    [notificationService.reducerPath]: notificationService.reducer,
    [roleService.reducerPath]: roleService.reducer,
    [clientService.reducerPath]: clientService.reducer,
    [ticketService.reducerPath]: ticketService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      profileService.middleware,
      staffService.middleware,
      categoryService.middleware,
      agentService.middleware,
      departmentService.middleware,
      priorityService.middleware,
      notificationService.middleware,
      roleService.middleware,
      clientService.middleware,
      ticketService.middleware,
    ]),
});

export default store;
