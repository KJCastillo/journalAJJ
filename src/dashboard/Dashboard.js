import "./Dashboard.css";
import { useState } from "react";
import JournalList from "../pages/journals/JournalList";
import { useCollection } from "../hooks/useCollection";
import "./Dashboard.css";
import { useAuthContext } from "../hooks/useAuthContext";
import ProjectFilter from "./ProjectFilter";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { document, error } = useCollection("technique", [
    "uid",
    "==",
    user.uid,
  ]);
  const [currentFilter, setCurrentFilter] = useState("All");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  //change filter here, to set new filter and show it on journal list below

  const journals = document ? document.filter(document => {
    switch(currentFilter) {
      case 'All':
        return true
      case "Full Mount":
      case  "Back Mount":
      case "Side Control":
      case  "North South":
      case  "Full Guard":
      case  "Half Guard":
      case  "Seated Guard":
      case "De La Riva":
      case  "Reverse De La Riva":
      case  "Single Leg X":
      case  "X Guard":
      case   "Turtle":
      case  "Standing Up":
        console.log(document.position, currentFilter)
        return document.position === currentFilter
        default:
          return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {document && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {journals && <JournalList techniques={journals} />}
    </div>
  );
}
