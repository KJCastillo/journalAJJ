import "./JournalList.css"

export function JournalList({journals}) {
  const handleClick = async (id) => {
    console.log(id)
  }

  return (
    <div className="journal-list">
      <ul>
        {journals.map((journal) => (
          <li key={journal.id} onClick={() => handleClick(journal.id)}>{journal.title}</li>
        ))}
      </ul>
    </div>
  )
}
