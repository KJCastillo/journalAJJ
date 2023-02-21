import "./Dashboard.css";
import JournalList from "../pages/journals/JournalList";
import { useCollection } from "../hooks/useCollection";
import "./Dashboard.css";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Dashboard() {
  const { user } = useAuthContext()
  const { document, error } = useCollection(
    "technique",
    ['uid', '==', user.uid]
    );

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {document && <JournalList techniques={document} />}
    </div>
  );
}
