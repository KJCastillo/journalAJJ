import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data for document
  useEffect(() => {
    const ref = collection(db, c);
    getDocs(ref);

    const unsubscribe = onSnapshot(
      ref,
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
  }, [c, id]);
  return { document, error };
};
