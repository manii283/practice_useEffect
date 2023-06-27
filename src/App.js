import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("iam Increased");
  });

  return (
    <div className="App">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {" "}
        Click me {num}
      </button>
    </div>
  );
}

export default App;
