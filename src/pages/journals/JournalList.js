import "./JournalList.css";

export function JournalList({ journals }) {
  return (
    <div className="journal-list">
      {journals.length === 0 && <p>No projects available</p>}
      {journals.map(journal => (
                <>
                <h4>{journal.title}</h4>
                <p>{journal.coach}</p>
                <div className="assigned-to">
                {/* <ul>
                    {journal.map(user => (
                        <li key={user.displayName}>
                            <p>test</p>
                        </li>
                    ))}
                    </ul> */}
                </div>
                </>
        ))}
    </div>
  );
}
