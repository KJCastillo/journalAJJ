import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data for document
  useEffect(() => {
    //const ref = collection(db, c);
    const getDocuments = async () => {
      const docRef = doc(db, c, id);
      const docSnap = await getDocs(docRef);

      const unsubscribe = onSnapshot(
      docSnap,
      (snapshot) => {
        if (snapshot) {
          setDocument({ ...snapshot, id: snapshot.id });
          setError(null);
        } else {
          setError("No document exists");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get document");
      }
    );
    return () => {
      unsubscribe();
    };
    };

    // const unsubscribe = onSnapshot(
    //   ref,
    //   (snapshot) => {
    //     if (snapshot) {
    //       setDocument({ ...snapshot, id: snapshot.id });
    //       setError(null);
    //     } else {
    //       setError("No document exists");
    //     }
    //   },
    //   (err) => {
    //     console.log(err.message);
    //     setError("failed to get document");
    //   }
    // );
    // return () => {
    //   unsubscribe();
    // };
    getDocuments()} , [c, id]);

  return { document, error };
};
