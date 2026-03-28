import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../shared/api/axiosBaseQuery';
import type { Role } from '../model/types';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  firstName: string;
  email: string;
  password: string;
}

interface RegisterVendorRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface AuthResponse {
  role: Role;
  email: string;
  token: string;
  id: number;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery,

  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/sign-in',
        method: 'POST',
        body: credentials
      })
    }),

    signUp: builder.mutation<AuthResponse, RegisterRequest>({
      query: (data) => ({
        url: '/api/auth/sign-up/user',
        method: 'POST',
        body: data
      })
    }),

    signUpVendor: builder.mutation<AuthResponse, RegisterVendorRequest>({
      query: (data) => ({
        url: '/api/auth/sign-up/vendor',
        method: 'POST',
        body: data
      })
    }),

    authWithGoogle: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: '/api/auth/google',
        method: 'POST'
      })
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: '/api/auth/forgot-password',
        method: 'POST',
        body: data
      })
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/api/auth/reset-password',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useSignUpVendorMutation,
  useAuthWithGoogleMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
