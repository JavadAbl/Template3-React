import { useAuth } from "../../Hooks/UseAuth";
import Loading from "../Indicators/Loading";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
