import { api, setHeaders } from "./api";

interface userProfileInterface {
  email: string;
  id: string;
  name: string;
  phone: string;
}

interface SignUpInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

const endpoints = {
  SIGN_UP: "/auth/signup",
  SIGN_IN: "/auth/signInUser",
  GET_USER: "/auth/getUser",
  UPDATE_USER: "/auth/updateUser",
  VERIFY_SESSION: "/auth/verifySession",
};


export const getUserProfile = async (userId: string, token: string) => {
  try {
    const users = await api.post(
      endpoints.GET_USER,
      { userId },
      setHeaders({token})
    );
    return users.data.response;
  } catch (error) {
    console.log("Erro ao buscar usuário:", error);
    throw error;
  }
};

export const updateUserProfile = async (
  body: userProfileInterface,
  token: string
) => {
  try {
    const users = await api.post(
      endpoints.UPDATE_USER,
      { body },
      setHeaders({token})
    );
    return users.data.response;
  } catch (error) {
    console.log("Erro ao buscar usuário:", error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post(
      endpoints.SIGN_IN,
      { email, password },
      setHeaders({})
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao realizar Login:", error);
    throw error;
  }
};

export const signUp = async (body: SignUpInterface, token: string) => {
  try {
    const response = await api.post(
      endpoints.SIGN_UP,
      body,
      setHeaders({token})
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao realizar cadastrar usuário:", error);
    throw error;
  }
};

export const verifySessionAuth = async (
  token: string,
  sessionId: string,
  userId: string
) => {
  try {
    return await api.post(endpoints.VERIFY_SESSION, {
      token,
      sessionId,
      userId,
    });
  } catch (error) {
    console.log("Erro ao verificar sessão:", error);
    throw error;
  }
};

export default {
  signIn,
  getUserProfile,
  updateUserProfile,
};
