import "./Journal.css";

export default function JournalSummary({ techniques }) {
  return (
    <div>
      <div className="journal-summary">
        <h2 className="journal-title">{techniques.title}</h2>
        <p className="details">{techniques.technique}</p>
        <h5>
          {techniques.position} - {techniques.type} - {techniques.style}
        </h5>
        <p className="taught-by">Taught by: {techniques.coach}</p>
      </div>
    </div>
  );
}
