import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import "./Journal.css";
import JournalSummary from "./JournalSummary";
import JournalComments from "./JournalComments";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("technique", id);
  
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="journal-details">
      <JournalSummary techniques={document} />
      <JournalComments techniques={document} />
    </div>
  );
}
