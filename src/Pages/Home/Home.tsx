import React from "react";
import "./Home.css";
import photo from "../../public/images/photo.png";
import Projects from "../../Components/Projects/Projects";
import projects from "../../projects.json";
import Button from "../../Components/Core/Button";
import { Link } from "react-router-dom";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <div className="aboutContainer">
        <img src={photo} className="amandaImage" alt="amanda" />
        <div className="aboutText">
          <h2 className="aboutHeader">About Me</h2>
          <p>
            I am a full stack web developer living in Minnesota. I have an
            Associates Degree in Interior Design and in December of 2020
            completed a full stack bootcamp through the University of Minnesota.
            My goal is to combine the two to create a unique experience for the
            user.
          </p>
          <p>
            I have a background in retail management, with a little more than 15
            years experience. Which has given me the ability to develop strong
            communication skills and a drive to succeed in a team enviornment.
          </p>
          <p>
            In my spare time I like to play video games and play around in
            different techonologies. I'm like being able to challenge myself and
            like being able to push myself to learning new things as often as
            possible.
          </p>
        </div>
      </div>

      <header>Featured Projects</header>

      <div className="projects">
        <Projects
          key={projects[0].id}
          id={projects[0].id}
          image={projects[0].image}
          name={projects[0].name}
          description={projects[0].description}
          skill={projects[0].skill}
          github={projects[0].github}
          site={projects[0].site}
        />

        <Projects
          key={projects[1].id}
          id={projects[1].id}
          image={projects[1].image}
          name={projects[1].name}
          description={projects[1].description}
          skill={projects[1].skill}
          github={projects[1].github}
          site={projects[1].site}
        />
      </div>

      <div className="buttonWrapper">
        <Button
          type="submit"
          className="portfolioButton"
        >
          <Link to="/portfolio">SEE FULL PORTFOLIO</Link>{" "}
        </Button>
      </div>

      <header>Skills</header>
      <table>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>TypeScript</td>
            <td>jQuery</td>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Bootstrap</td>
            <td>Emotion</td>
            <td>React.js</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>MySql</td>
            <td>NoSQL</td>
            <td>Node.js</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Home;
