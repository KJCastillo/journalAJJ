import { useEffect, useState } from "react"
import "./Dashboard.css"
import { JournalList } from '../pages/journals/JournalList'
// import { JournalForm } from '../pages/journals/JournalForm'
import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"

export default function Dashboard() {
    const [journal, setJournal] = useState(null)

    useEffect(() => {
      const ref = collection(db, 'moves')

      getDocs(ref)
      .then((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setJournal(results)
      })
    }, [])

  return (
    <div>
        {journal && <JournalList journals={journal}/>}
        {/* <JournalForm /> */}
    </div>
  )
}
