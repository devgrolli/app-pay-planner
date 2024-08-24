import {
  SET_INITIAL_PAGE,
  SET_RESULTS,
  SET_RESULTS_PAID,
  SET_RESULTS_FILE,
  LOGIN,
  LOGOUT,
  SET_USER_PROFILE,
} from "./actionTypes";

const initialState = {
  initialPage: { page: 0 },
  results: [],
  resultsPaid: [],
  resultsFile: [],
  isLoggedIn: false,
  userProfile: {
    email: "",
    id: "",
    name: "",
    phone: "",
  },
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INITIAL_PAGE:
      return { ...state, initialPage: action.payload };
    case SET_RESULTS:
      return { ...state, results: action.payload };
    case SET_RESULTS_PAID:
      return { ...state, resultsPaid: action.payload };
    case SET_RESULTS_FILE:
      return { ...state, resultsFile: action.payload };
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
