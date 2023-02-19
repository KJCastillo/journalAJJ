import "./JournalList.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function JournalList({ techniques }) {
  // const { user } = useAuthContext();
  
  // console.log(user.uid)
  // console.log(techniques)

  return (
    <div className="journal-list">
      {techniques.length === 0 && <p>No Techniques Added</p>}

      {/* {user.uid === techniques.createdBy.id && ()} */}

      {techniques.map((technique) => (
        <Link to={`/journals/${technique.id}`} key={technique.id}>
          <h4>{technique.title}</h4>
          {/* <p>{technique.technique}</p> */}
          <h5>
            {technique.position} - {technique.type} - {technique.style}
          </h5>
          <p className="taught-by">{technique.coach}</p>
        </Link>
      ))}
    </div>
  );
}
