import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      await auth.signOut();
      dispatch({ type: "LOGOUT" });
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, isPending, error };
};
