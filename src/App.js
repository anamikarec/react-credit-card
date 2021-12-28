import { useState } from "react";
import PinInput from "./Pin/PinInput";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <h1>CREDIT CARD</h1>
      <PinInput onChange={(pin) => setState(pin)} />
      <hr />
      <div>
        {state.length === 5 ? (
          <div style={{ color: "green" }}>{state}</div>
        ) : (
          <div>{state}</div>
        )}
      </div>
    </div>
  );
}
