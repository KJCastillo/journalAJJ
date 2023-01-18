// import { useState } from "react";
// import { auth } from "../firebase/config";
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function useLogout() {
//   const [error, setError] = useState(null);
//   const [isPending, setIsPending] = useState(false);

//   const logout = (email, password) => {
//     setError(null);

//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log("loggedout", res.user);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIsPending(false);
//       });
//   };

//   return { error, isPending, logout };
// }