import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ROLES, type Role } from './types';

interface AuthState {
  role: Role;
  id: number | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  role: ROLES.GUEST,
  token: null,
  isAuth: false,
  id: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ role: Role; id: number; token: string }>) => {
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuth = true;
    },

    logout: (state) => {
      state.role = ROLES.GUEST;
      state.id = null;
      state.token = null;
      state.isAuth = false;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
