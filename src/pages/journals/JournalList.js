import "./JournalList.css";

export function JournalList({ journals }) {
  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div className="journal-list">
      <ul>
        {journals.map((journal) => (
          <>
            <span key={journal.id}>
              <h2 key={journal.id} onClick={() => handleClick(journal.id)}>{journal.title}</h2>
              <p>{journal.move}</p>
              <h4>{journal.type}</h4>
              <p>{journal.coach}</p>
            </span>
          </>
        ))}
      </ul>
    </div>
  );
}
