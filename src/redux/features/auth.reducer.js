//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

//Internal Lib Import
import SessionHelper from "../../helpers/SessionHelper";

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    accessToken: SessionHelper.getAccessToken() || undefined,
    user: SessionHelper.getUser() || undefined,
  },
  reducers: {
    userLogin: (state, action) => {
      SessionHelper.setAccessToken(action.payload.accessToken);
      SessionHelper.setUser(action.payload.user);
      state.accessToken = SessionHelper.getAccessToken();
      state.user = SessionHelper.getUser();
    },
    userLogout: (state, _action) => {
      SessionHelper.removeTokens();
      SessionHelper.removeUser();
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userLogin, userLogout } = authReducer.actions;

export default authReducer.reducer;
