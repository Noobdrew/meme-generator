import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMeme, setAllMeme] = React.useState({});

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((responce) => responce.json())
      .then((data) => setAllMeme(data));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.data.memes.length);
    const randomImg = allMeme.data.memes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: randomImg,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form-conteiner">
        <div action="" className="form">
          <input
            type="text"
            name="topText"
            id="top-text"
            placeholder="Top Text"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            name="bottomText"
            id="bottom-text"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
          />
          <button onClick={getMemeImage}> Get a new meme image</button>
        </div>
      </div>

      <div className="meme">
        <img src={meme.randomImg} alt="meme" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
