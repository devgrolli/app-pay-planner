import axios from "axios";

interface HeaderInterface {
  signal?: AbortSignal;
  token?: string;
}

export const api = axios.create({
  baseURL: process.env.BASE_URL_MS
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const setHeaders = ({ token, signal }: HeaderInterface) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (signal) {
    return {
      headers,
      signal,
    };
  }

  return { headers };
};

