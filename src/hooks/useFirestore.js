import { useReducer } from "react";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
//outside of hook, no need to change after it's made

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response] = useReducer(firestoreReducer, initialState);
  //response repesents state that we get back from firestore
  //on that object we can get an error or success properties saying if the request works or not
  return { response };
  
  // IS THIS HOOK EVEN NECESSARY??? FOLLOW UP!!
};
