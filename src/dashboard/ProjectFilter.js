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
    <div className="journal-filter">
      <nav>
        <p>Filter by:</p>
        {filterListPosition.map((f) => (
          <button key={f} onClick={() => handleClick(f)} className={currentFilter === f ? 'active' : ''}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
