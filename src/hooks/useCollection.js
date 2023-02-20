import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, where, query } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const q = useRef(_q).current;
  //useRef to stop infinite loop in useEffect
  //_q is an array and it is 'different' in every function call

  //console.log(q);

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      query(ref, where(...q));
    }

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
  }, [c, q]);

  return { document, error };
};
