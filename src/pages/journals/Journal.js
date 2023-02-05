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
      <p>test test test</p>
      <h1>{document.type}</h1>
      {/* <ProjectSummary project={document}/>
      <ProjectComments project={document}/> */}
    </div>
  );
}
