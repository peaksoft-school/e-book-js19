import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ROLES, type Role } from './types';

interface AuthState {
  role: Role;
  email: string | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  role: ROLES.GUEST,
  email: null,
  token: null,
  isAuth: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ role: Role; email: string; token: string }>
    ) => {
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.token = action.payload.token;

      state.isAuth = true;
    },
    logout: (state) => {
      state.role = ROLES.GUEST;
      state.email = null;
      state.token = null;
      state.isAuth = false;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
