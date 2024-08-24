import { useAuth } from "@/provider/authenticationProvider";
import { Suspense } from "react";
import { ROUTES } from "./nameRoutes";
import { publicRoutes } from "./publicRoutes";
import { protectedRoutes } from "./protectRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RedirectRoute from "./redirectRoute";
import LoadingPage from "@/pages/Loading";

const Routes = () => {
  const { isLoggedIn, isLoading } = useAuth();

  const routerConfig = [
    ...publicRoutes,
    {
      path: ROUTES.HOME,
      element: isLoading ? <LoadingPage /> : <RedirectRoute />,
      children: isLoggedIn ? protectedRoutes : [],
    },
  ];

  const router = createBrowserRouter(routerConfig);

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;