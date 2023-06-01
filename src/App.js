import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const [state, setState] = useState(0);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
export default App;
