import { useState } from "react";

import "./App.css";
import logo from "./logo.svg";

const App = () => {
  const [isShown, setIsShown] = useState(false)

  const onClick = () => {
    setIsShown(!isShown)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the button to animate the logo.
        </p>

        <button className="App-button" onClick={onClick}>
          {isShown ? "Hide" : "Show"}
        </button>

        {isShown && <img src={logo} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
