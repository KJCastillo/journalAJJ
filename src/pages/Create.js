import "./Create.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Select from "react-select";

const types = [
  { value: "sweep", label: "Sweep" },
  { value: "pass", label: "Pass" },
  { value: "choke", label: "Choke" },
  { value: "joint lock", label: "Joint Lock" },
  { value: "takedown", label: "Takedown" },
];

const positions = [
  { value: "mount", label: "Full Mount" },
  { value: "back", label: "Back Mount" },
  { value: "side control", label: "Side Control" },
  { value: "full guard", label: "Full Guard" },
  { value: "half guard", label: "Half Guard" },
  { value: "seated guard", label: "Seated Guard" },
  { value: "de la riva", label: "De La Riva" },
  { value: "reverse de la riva", label: "Reverse De La Riva" },
  { value: "single leg x", label: "Single Leg X" },
  { value: "X Guard", label: "X Guard" },
  { value: "turtle", label: "Turtle" },
];

const styles = [
  { value: "gi", label: "Gi" },
  { value: "no gi", label: "No Gi" },
  { value: "wrestling", label: "Wrestling" },
  { value: "judo", label: "Judo" },
];

export default function Create() {
  const [title, setTitle] = useState("");
  const [move, setMove] = useState("");
  const [coach, setCoach] = useState("");
  const [type, setType] = useState("");
  const [position, setPosition] = useState("");
  const [style, setStyle] = useState("");
  const [formError, setFormError] = useState(null)
  const { user } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null)

    if (!position) {
      setFormError("Please select a position");
      return;
    }
    if (!type) {
      setFormError("Please select a type");
      return;
    }
    if (!style) {
      setFormError("Please select a style");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      id: user.id
    }

    const project = {
      title, 
      move, 
      coach, 
      type: type.value, 
      position: position.value, 
      style: style.value,
      createdBy
    }

    console.log(project);
  };

  return (
    <div className="body">
    <div className="create-form">
      <h2 className="page-title">Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Describe Move:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setMove(e.target.value)}
            value={move}
          ></textarea>
        </label>
        <label>
          <span>Taught by Coach:</span>
          <input
            required
            type="text"
            onChange={(e) => setCoach(e.target.value)}
            value={coach}
          />
        </label>
        <label>
          <span>Move Position:</span>
          <Select 
          onChange={(option) => setPosition(option)}
          options={positions}
          />
        </label>
        <label>
          <span>Move Type:</span>
          <Select 
          onChange={(option) => setType(option)}
          options={types}
          />
        </label>
        <label>
          <span>Move Style:</span>
          <Select 
          onChange={(option) => setStyle(option)}
          options={styles}
          />
        </label>
        <button className="btn proj-btn">Add Entry</button>
        {formError && <p className="error error-create">{formError}</p>}
      </form>
    </div>
    </div>
  );
}
