import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, loginReducer } from './reducers';

const reducer = {
  root: rootReducer,
  auth: loginReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;