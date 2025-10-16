import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

export function useAuth() {
  const { setTokenObject, setIsAuthenticated, setStep } = useAuthStore();
  const navigate = useNavigate();
  const [authLoading, setAuthLoading] = useState(true);

  // Check if token is present and set user details in the store when page loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // decode token and set in the store
      const decodedToken = jwtDecode(token);
      setTokenObject(decodedToken);
      setIsAuthenticated(true);
      API.defaults.headers["Authorization"] = `Bearer ${token}`;
      setStep(1);
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
