import "./Journal.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { serverTimestamp } from "firebase/firestore";

export default function JournalComments() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentToAdd = {
        displayName: user.displayName,
        content: newComment,
        createdAt: serverTimestamp(),
        id: Math.random()
    }
    console.log(commentToAdd)
  }

  return (
    <div className="journal-comments">
      <h4>Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add New Comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
