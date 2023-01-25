import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      await updateProfile( auth.currentUser, { displayName });
     
      

      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

 // createUserWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     dispatch({ type: 'LOGIN', payload: res.user })
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setIsPending(false)
    //   });