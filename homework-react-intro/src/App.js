import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./NewComponents/ButtonComponent";
import ImageComponent from "./NewComponents/ImageComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ButtonComponent
          h1content="This is the homework for today!"
          labelContent="First React Button!"
          hoverCss="hovering"
        />

        <ImageComponent
          imageSource="https://placekitten.com/400"
          altContent="Random Kitten PlaceHolder for developers"
          placeholderArea="imageCss"
          hoverCss="hovering"
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
