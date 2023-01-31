import "./JournalList.css";
import { Link } from "react-router-dom"

export default function JournalList({ techniques }) {
  return (
    <div className="journal-list">
      {techniques.length === 0 && <p>No Techniques Added</p>}
      {techniques.map(technique => (
        <Link to={`/journals/${technique.id}`} key={technique.id}>{technique.title}</Link>
      ))}
    </div>
  );
}

