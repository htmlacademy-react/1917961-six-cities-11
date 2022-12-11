import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { InfoUser } from '../../types/auth-data';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    loadAuthInfo: (state, action: PayloadAction<InfoUser>) => {
      state.authInfo = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { loadAuthInfo } = userProcess.actions;
