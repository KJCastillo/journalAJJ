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
      {document && <JournalList techniques={document} />}
    </div>
  );
}
