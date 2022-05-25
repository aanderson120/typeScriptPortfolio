import React from "react";
import "./Projects.css";

interface ProjectProps {
  readonly key?: string | number;
  readonly id?: string | number;
  readonly image: string;
  readonly name: string;
  readonly description: string;
  readonly skill: string;
  readonly github: string;
  readonly site: string;
}

export const Projects: React.FC<ProjectProps> = ({
  //   key,
  //   id,
  image,
  name,
  description,
  skill,
  github,
  site,
}) => {
  return (
    // <div className="card">
    //   <div className="img-container">
    <div className="projectCard">
      <div className="projectName">{name}</div>
      <img width="100%" src={image} alt="website" />
      <div className="cardText">DESCRIPTION:</div>

      <p>{description}</p>

      <div className="cardText">TECHNOLOGIES USED:</div>

      <p>{skill}</p>

      <div className="portfolioLink">
        <a
          className="github"
          // tag={Link}
          href={`${github}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
        |
        <a
          className="website"
          // tag={Link}
          href={`${site}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          DEPLOYED SITE
        </a>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Projects;
