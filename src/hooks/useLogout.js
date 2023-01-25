import { useState} from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const logout = () => {
    signOut(auth)
    .then(() => {
        dispatch({ type: 'LOGOUT'})
    })
    .catch((err) => {
      setError(err.message);
       setIsPending(false);
    })

  };

  return { error, isPending, logout };
}
