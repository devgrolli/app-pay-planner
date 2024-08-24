import {
  LOGIN,
  LOGOUT,
  SET_INITIAL_PAGE,
  SET_RESULTS_FILE,
  SET_RESULTS,
  SET_RESULTS_PAID,
  SET_USER_PROFILE,
} from "./actionTypes";
import { userProfileInterface } from "./interface";

export const setInitialPage = (page: any) => ({
  type: SET_INITIAL_PAGE,
  payload: page,
});

export const setResults = (results: any) => ({
  type: SET_RESULTS,
  payload: results,
});

export const setResultsFile = (results: any) => ({
  type: SET_RESULTS_FILE,
  payload: results,
});

export const setResultsPaid = (resultsPaid: any) => ({
  type: SET_RESULTS_PAID,
  payload: resultsPaid,
});

export const setUserProfile = (userProfile: userProfileInterface) => ({
  type: SET_USER_PROFILE,
  payload: userProfile,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
