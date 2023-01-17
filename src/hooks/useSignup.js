import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false)

  const signup = (email, password) => {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('signed in', res.user);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false)
      });
  };

  return { error, isPending, signup };
};
