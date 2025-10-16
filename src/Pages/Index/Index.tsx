import { useEffect } from "react";
import { useAppDispatch } from "../../Hooks/StateHooks";
import type { User } from "../../Features/User/UserTypes";
import { userActions } from "../../Features/User/UserSlice";

export default function Index() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Simulate logging in
    const dummyUser: User = { id: 1, name: "John Doe" };
    dispatch(
      userActions.setCredentials({ user: dummyUser, token: "fake-jwt-token" })
    );
  }, [dispatch]);

  return <div></div>;
}
