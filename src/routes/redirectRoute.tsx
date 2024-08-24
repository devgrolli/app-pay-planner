import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/provider/authenticationProvider";
import LoadingPage from "@/pages/Loading";

const RedirectRoute = () => {
  const { isLoggedIn, isLoading, startSessionValidation } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      startSessionValidation();
    }
  }, [isLoggedIn, isLoading, startSessionValidation]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default RedirectRoute;