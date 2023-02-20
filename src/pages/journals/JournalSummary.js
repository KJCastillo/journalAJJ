import "./Journal.css";
import { db } from "../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function JournalSummary({ techniques }) {
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    deleteDoc(doc(db, 'technique', techniques.id))
    //navigate("/")
  }

  console.log(techniques.id)

  return (
    <div>
      <div className="journal-summary">
        <h2 className="journal-title">{techniques.title}</h2>
        <p className="details">{techniques.technique}</p>
        <h5>
          {techniques.position} - {techniques.type} - {techniques.style}
        </h5>
        <p className="taught-by">Taught by: {techniques.coach}</p>
      </div>
      {user.uid === techniques.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Remove
        </button>
      )}
    </div>
  );
}
