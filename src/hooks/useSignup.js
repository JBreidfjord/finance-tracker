import { auth } from "../firebase/config";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (displayName, email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      await res.user.updateProfile({ displayName });
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
