import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./NewComponents/ButtonComponent";
import ImageComponent from "./NewComponents/ImageComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ButtonComponent labelContent="First React Button!" />

        <ImageComponent
          imageSource="https://placekitten.com/400"
          altContent="Random Kitten PlaceHolder for developers"
          placeholderArea="imageCss"
        />

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
