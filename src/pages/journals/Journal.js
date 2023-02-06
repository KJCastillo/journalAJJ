import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import "./Journal.css";
// import ProjectComments from "./ProjectComments";
// import ProjectSummary from "./ProjectSummary";

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
    <div className="project-details">
      <h2>{document.title}</h2>
      <p>{document.technique}</p>
      <h5>{document.position}</h5> - <h5>{document.type}</h5> - <h5>{document.style}</h5>
      <p>{document.coach}</p>
      {/* <ProjectSummary technique={document}/>
      <ProjectComments technique={document}/> */}
    </div>
  );
}
