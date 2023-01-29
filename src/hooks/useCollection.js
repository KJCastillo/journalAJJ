import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocument(results);

        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );
    return () => unsub();
  }, [c]);

  return { document, error };
};
