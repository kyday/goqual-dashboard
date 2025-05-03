import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import authService from "@/services/apis/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const accessToken = useAuthStore((state) => state.accessToken);
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useEffect(() => {
    const refresh = async () => {
      if (!accessToken && cookies.refreshToken) {
        try {
          const res = await authService.refresh(cookies.refreshToken);
          setAccessToken(res?.token);

          if (res?.refreshToken) {
            setCookie("refreshToken", res.refreshToken, { path: "/" });
          }
        } catch {
          removeCookie("refreshToken", { path: "/" });
        }
        return;
      }
    };

    refresh();
  }, [
    accessToken,
    cookies.refreshToken,
    setAccessToken,
    removeCookie,
    setCookie,
  ]);

  if (accessToken && location.pathname === "/signin") {
    return <Navigate to="/dashboard" replace />;
  }

  if (!accessToken && !cookies.refreshToken) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
