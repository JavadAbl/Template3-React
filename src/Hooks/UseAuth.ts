import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { useAppDispatch } from "./StateHooks";
import { userActions } from "../Features/User/UserSlice";
import { storage } from "../Utils/Storage";

export function useAuth() {
  const { login } = userActions;
  const dis = useAppDispatch();
  const navigate = useNavigate();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const accessToken = storage.getItem("accessToken");
    const refreshToken = storage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      let tokenObject = "";
      try {
        tokenObject = jwtDecode(accessToken);
      } catch (error) {
        dis(userActions.logout());
        navigate("/Login", { replace: true });
        return;
      }

      dis(login({ accessToken, refreshToken, tokenObject }));
      navigate("/", { replace: true });
    } else {
      localStorage.removeItem("token");
      navigate("/Login", { replace: true });
    }

    setAuthLoading(false);
  }, []);

  return {
    authLoading,
  };
}
