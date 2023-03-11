import { useState } from "react";
import "./Dashboard.css";

const filterListPosition = [
  "All",
  "Full Mount",
  "Back Mount",
  "Side Control",
  "North South",
  "Full Guard",
  "Half Guard",
  "Seated Guard",
  "De La Riva",
  "Reverse De La Riva",
  "Single Leg X",
  "X Guard",
  "Turtle",
  "Standing Up",
];

export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState("All");

  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter)
  };

  return (
    <div className="project-filter">
      <nav>
        {filterListPosition.map((f) => (
          <button key={f} onClick={() => handleClick(f)}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
