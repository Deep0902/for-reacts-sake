import ScrollReveal from "../ReactBits/ScrollReveal";
import ScrollVelocity from "../ReactBits/ScrollVelocity";
import ShinyText from "../ReactBits/ShinyText";
import Threads from "../ReactBits/Threads";
import SplitText from "../ReactBits/SplitText";
import "./Homepage.css"
function Homepage() {
  return (
    <>
      <div className="SplitText">
        <SplitText
          text="React Boiler Template!"
          className=""
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
      </div>
      <div className="Thread">
        <Threads amplitude={1} distance={0.5} enableMouseInteraction={true} />
      </div>
      <div className="ShinyText">
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
      <div className="empty-block"></div>
      <div className="scroll-velocity">
        <ScrollVelocity
          texts={[
            "The sky is clear and blue above the mountains",
            "Beneath, the river flows gently through the valley.",
          ]}
          velocity={60}
          className="custom-scroll-text"
        />
      </div>
      <div className="scroll-reveal">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          Once upon a time in a land where coffee was brewed by unicorns and the
          skies rained sprinkles, there lived a tiny dragon named Fluffernutter
          who dreamed of becoming a world-class pizza chef. Every day,
          Fluffernutter would don a tiny chef's hat and practice tossing dough
          while singing the national anthem of the Banana Republic. Despite his
          fiery breath, he was terrible at making pizza but a master at making
          everyone giggle with his fiery dance moves. So, as you fill this
          space, remember that even in the most chaotic kitchens, a sprinkle of
          humor and a dash of imagination can turn the blandest placeholder into
          a feast for the senses!
        </ScrollReveal>
      </div>

      <div className="empty-block"></div>
    </>
  );
}
export default Homepage;
