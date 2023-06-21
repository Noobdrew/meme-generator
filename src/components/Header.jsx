import troll from "../assets/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <img src={troll} alt="troll face" />
        <h2>Meme Generator</h2>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}
