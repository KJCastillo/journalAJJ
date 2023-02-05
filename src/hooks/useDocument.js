import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export const useDocument = async (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //realtime data for document
  useEffect(() => {
    const getDocument = async () => {
      const docRef = doc(db, c, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

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
    getDocument();
  }, [c, id]);

  return { document, error };
};
