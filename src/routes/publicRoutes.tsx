import { ROUTES } from "./nameRoutes";
import Login from '@/pages/Login';
import Initial from '@/pages/Initial';
import SignUp from '@/pages/SignUp';
import Password from '@/pages/Password';
import NotFoundPage from '@/pages/NotFound';

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.INITIAL, element: <Initial /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: ROUTES.FORGET_PASSWORD, element: <Password /> },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
];