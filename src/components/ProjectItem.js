import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techLanguages = technologies.map((techonology) => {
    return <span key = {techonology}>{techonology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techLanguages}
      </div>
    </div>
  );
}

export default ProjectItem;
