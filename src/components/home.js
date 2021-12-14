import logo from "../logo.svg";
import "../moules/styles/app.css";

function App() {
  const clickHandler = () => alert(`Onoodor: ${new Date()}`);
  return (
    <body>
      <div class="cube">
        <span></span>
        {/* <span style={"--i:1;"}></span>
        <span style={"--i:2;"}></span>
        <span style={"--i:3;"}></span> */}
      </div>
    </body>

    // <div className="App">
    //   <span>{`Unuuder: ${new Date()}`} </span>
    //   <form>
    //     <label>Ene bol buttn</label>
    //     <br />
    //     <input type="button" value="Click me" onClick={clickHandler}></input>
    //   </form>
    // </div>
  );
}
export default App;
