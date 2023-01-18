import { useState } from "react";

export function JournalForm() {
  const [newTitle, setNewTitle] = useState("");
  const [newMove, setNewMove] = useState("");
//   const [newType, setType] = useState("");
//   const [newCoach, setNewCoach] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newTitle, newMove);

    setNewTitle("")
    setNewMove("")
  };

  return (
    <form onClick={handleSubmit}>
      <label>
        <span>New Move Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        />
      </label>
      <label>
        <span>Describe Move:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewMove(e.target.value)}
          value={newMove}
        />
      </label>
      <button className="btn">Add</button>
    </form>
  );
}
