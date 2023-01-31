import "./Dashboard.css";
import JournalList from "../pages/journals/JournalList";
// import { JournalForm } from '../pages/journals/JournalForm'
import { useCollection } from "../hooks/useCollection";
import "./Dashboard.css";

export default function Dashboard() {
  const { document, error } = useCollection("technique");

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {document && <JournalList techniques={document}/>}
    </div>
  );
}
