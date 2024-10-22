// PrivateRoute.tsx
import React from "react";
import { useAuth } from "../src/AuthContext";
import { UnauthenticatedRoutes, AuthenticatedRoutes } from "./app/routes";

const PrivateRoute: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

 if (isAuthenticated || !!localStorage.getItem("accessToken")) {
    return <AuthenticatedRoutes userType={user?.userType} />;
  }

  return <UnauthenticatedRoutes />;
};

export default PrivateRoute;
