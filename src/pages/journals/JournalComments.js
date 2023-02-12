import "./Journal.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function JournalComments({ techniques }) {
  const [newComment, setNewComment] = useState("");
  const { response } = useFirestore("technique");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      content: newComment,
      createdAt: Timestamp.now(),
      id: Math.random(),
    };

    const ref = doc(db, 'technique', techniques.id)

    await updateDoc(ref, {
      comments: [...techniques.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="journal-comments">
      <h4>Comments</h4>

      <ul>
        {techniques.comments.length > 0 && techniques.comments.map(comment => (
          <li key={comment.id}>
            {/* <div className="comment-author">
              <p>{comment.displayName}</p>
            </div> */}
            <div className="comment-date">
              <p>{formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}</p>
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

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
