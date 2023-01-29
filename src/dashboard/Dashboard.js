import "./Dashboard.css"
import { JournalList } from '../pages/journals/JournalList'
// import { JournalForm } from '../pages/journals/JournalForm'
import { useCollection } from "../hooks/useCollection"
import "./Dashboard.css"

export default function Dashboard() {
  const { document: journal} = useCollection('moves')  

  return (
    <div>
        {journal && <JournalList journals={journal}/>}
        {/* <JournalForm /> */}
    </div>
  )
}
