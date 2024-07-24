import "./styles.css";

function Intro() {
  return <div className="intro">I am a Software Developer</div>;
}

function Ignacio() {
  return <span className="ignacio">&nbsp;Ignacio</span>;
}

export default function App() {
  return (
    <>
      <div className="intro">
        Hi! I'm <Ignacio />
      </div>
      <Intro />
      <div>this is my website</div>
    </>
  );
}
