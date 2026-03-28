import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { axiosInstance } from './axiosInstance';

export const axiosBaseQuery: BaseQueryFn<
  { url: string; method?: AxiosRequestConfig['method']; body?: unknown; params?: unknown },
  unknown,
  unknown
> = async ({ url, method = 'GET', body, params }) => {
  try {
    const result = await axiosInstance({ url, method, data: body, params });

    return { data: result.data };
  } catch (error) {
    const err = error as AxiosError;

    return {
      error: {
        status: err.response?.status,
        data: err.response?.data
      }
    };
  }
};
