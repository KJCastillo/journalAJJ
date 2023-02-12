import "./Create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Select from "react-select";

const types = [
  { value: "Sweep", label: "Sweep" },
  { value: "Pass", label: "Pass" },
  { value: "Choke", label: "Choke" },
  { value: "Joint Lock", label: "Joint Lock" },
  { value: "Takedown", label: "Takedown" },
];

const positions = [
  { value: "Full Mount", label: "Full Mount" },
  { value: "Back Mount", label: "Back Mount" },
  { value: "Side Control", label: "Side Control" },
  { value: "North South", label: "North South" },
  { value: "Full Guard", label: "Full Guard" },
  { value: "Half Guard", label: "Half Guard" },
  { value: "Seated Guard", label: "Seated Guard" },
  { value: "De La Riva", label: "De La Riva" },
  { value: "Reverse De La Riva", label: "Reverse De La Riva" },
  { value: "Single Leg X", label: "Single Leg X" },
  { value: "X Guard", label: "X Guard" },
  { value: "Turtle", label: "Turtle" },
  { value: "Standing Up", label: "Standing up" },
];

const styles = [
  { value: "Gi", label: "Gi" },
  { value: "No Gi", label: "No Gi" },
  { value: "Wrestling", label: "Wrestling" },
  { value: "Judo", label: "Judo" },
];

export default function Create() {
  const navigate = useNavigate();
  const { response } = useFirestore("moves");
  const [title, setTitle] = useState("");
  const [technique, setTechnique] = useState("");
  const [coach, setCoach] = useState("");
  const [type, setType] = useState("");
  const [position, setPosition] = useState("");
  const [style, setStyle] = useState("");
  const [formError, setFormError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

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
      id: user.uid,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "technique"), {
      title,
      technique,
      coach,
      type: type.value,
      position: position.value,
      style: style.value,
      createdBy,
      comments: []
    });

    if (!response.error) {
      navigate("/");
    }
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
            <span>Describe Technique:</span>
            <textarea
              required
              type="text"
              onChange={(e) => setTechnique(e.target.value)}
              value={technique}
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
            <Select onChange={(option) => setType(option)} options={types} />
          </label>
          <label>
            <span>Move Style:</span>
            <Select onChange={(option) => setStyle(option)} options={styles} />
          </label>
          <button className="btn proj-btn">Add Entry</button>
          {formError && <p className="error error-create">{formError}</p>}
        </form>
      </div>
    </div>
  );
}
