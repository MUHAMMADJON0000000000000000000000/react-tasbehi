import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="div">
        <img src={reactLogo} alt="React logo" />
        <h1>React</h1>
        <p>the library for building user iterface</p>
      </div>
      <button>Learn React</button>
      <button>API Reference</button>
    </>
  );
}

export default App;
