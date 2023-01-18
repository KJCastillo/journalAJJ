import { useState } from "react"
import "./Dashboard.css"
import { JournalList } from '../pages/journals/JournalList'
import { JournalForm } from '../pages/journals/JournalForm'

export default function Dashboard() {
    const [journal, setJournal] = useState([
        {title: 'triangle', id: 1},
        {title: 'armbar', id: 1}
    ])

  return (
    <div>
        {journal && <JournalList journals={journal}/>}
        <JournalForm />
    </div>
  )
}
