export default function Form() {
  return (
    <div className="form-conteiner">
      <form action="">
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
        <input type="button" value="Get a new meme image" />
      </form>
    </div>
  );
}
