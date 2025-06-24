import { useNavigate } from "react-router-dom";
import "./Projects.css";
import Threads from "../../ReactBits/Threads";
function Projects() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/for-reacts-sake");
  };
  return (
    <div className="mainContainer">
      <div className="Thread">
        <Threads amplitude={1} distance={0.5} enableMouseInteraction={true} />
      </div>
      <div className="breadcrumbs">
        <span onClick={navigateToHome} style={{ cursor: "pointer" }}>
          Home
        </span>
        <span>/</span>
        <span>Projects</span>
        <span>/</span>
        <span>Project 1</span>
      </div>
    </div>
  );
}

export default Projects;
