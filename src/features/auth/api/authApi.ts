import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../shared/api/axiosBaseQuery';
import type { Role } from '../model/types';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'vendor';
}

interface AuthResponse {
  role: Role;
  email: string;
  token: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery,

  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: credentials
      })
    }),

    signUp: builder.mutation<AuthResponse, RegisterRequest>({
      query: (data) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: data
      })
    }),

    authWithGoogle: builder.query<AuthResponse, void>({
      query: () => ({ url: '/auth/google', method: 'POST' })
    }),

    forgotPassword: builder.query({
      query: (data) => ({
        url: '/api/auth/forgot-password',
        method: 'POST',
        body: data
      })
    }),

    resetPassword: builder.query({
      query: (data) => ({
        url: '/api/auth/forgot-password',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useAuthWithGoogleQuery,
  useForgotPasswordQuery,
  useResetPasswordQuery
} = authApi;
