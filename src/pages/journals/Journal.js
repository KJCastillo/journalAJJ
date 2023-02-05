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
      <h1>{document.title}</h1>
      <p>{document.technique}</p>
      <p>{document.coach}</p>
      <p>{document.position}</p>
      <p>{document.type}</p>
      <p>{document.style}</p>
      {/* <ProjectSummary project={document}/>
      <ProjectComments project={document}/> */}
    </div>
  );
}
