import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("i am Increased");
  },[]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>

      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click me {nums}
      </button>
    </div>
  );
}

export default App;
