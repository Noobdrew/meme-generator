export default function Form() {
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
          <button> Get a new meme image</button>
        </div>
      </div>
    </main>
  );
}
