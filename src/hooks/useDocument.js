import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = doc(db, c, id);

    const unsub = onSnapshot(
      ref,
      (doc) => {
        if (doc.data()) {
          setDocument({ ...doc.data(), id: doc.id });
          setError(null);
        } else {
          setError("No journal exists");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get document");
      }
    );
    return () => {
      unsub();
    };
  }, [c, id]);
  return { document, error };
};
