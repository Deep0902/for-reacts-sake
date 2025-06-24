import Threads from "../../ReactBits/Threads";
import "./LandingPage.css";
import SplitText from "../../ReactBits/SplitText";
import PlanetAnimation, { Samurai } from "../Animations/Animations";

function LandingPage() {
  return (
    <div className="mainContainer-landing">
      <div className="Thread">
        <Threads amplitude={1} distance={0.5} enableMouseInteraction={true} />
      </div>
      <section className="hero">
        <div className="title-card">
          <SplitText
            text="I'm a Frontend Developer!"
            className="SplitText"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <Samurai />
        </div>
      </section>
      <section className="hero">
        <div className="title-card">
          <SplitText
            text="I'm a Frontend Developer!"
            className="SplitText"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <PlanetAnimation />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
