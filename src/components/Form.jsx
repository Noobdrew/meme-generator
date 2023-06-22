import memeData from "../memeData";
import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImg, setAllMemeImg] = React.useState(memeData);

  function getMemeImage() {
    const randomNumber = Math.floor(
      Math.random() * allMemeImg.data.memes.length
    );

    const randomImg = allMemeImg.data.memes[randomNumber].url;
    console.log(randomImg);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: randomImg,
      };
    });
  }
  return (
    <main>
      <div className="form-conteiner">
        <div action="" className="form">
          <input
            type="text"
            name="top-text"
            id="top-text"
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottom-text"
            id="bottom-text"
            placeholder="Bottom Text"
          />
          <button onClick={getMemeImage}> Get a new meme image</button>
        </div>
      </div>
      <img src={meme.randomImg} alt="meme" className="meme-img" />
    </main>
  );
}
