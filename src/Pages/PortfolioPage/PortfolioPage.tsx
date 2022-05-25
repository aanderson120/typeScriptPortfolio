import React from "react";
import "./PortfolioPage.css";
import Portfolio from "../../Components/Projects/Projects";
import projects from "../../projects.json";

interface PortfolioPageProps {}
const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  return (
    <div>
      <div className="projectsHeader">Projects</div>
      <div className="projectsWrapper">
        {projects.map((project) => (
          <Portfolio
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            skill={project.skill}
            github={project.github}
            site={project.site}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
