import { useState, useEffect } from "react";

function Hello() {

  // useEffect runs function
  // and reapeat it every time the dependencies(inside []) changes
  useEffect(() => {
    console.log("Hi :)");
    return () => {
      console.log("bye :(");
    }
  }, [])
  
  // same meaning another ver.
  // useEffect runs function
  // and reapeat it every time the dependencies(inside []) changes
  // useEffect(function () {
  //   console.log("Hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   }
  // }, []);

  return <h1>Hello</h1>
}

function App() {
  
  // showing -> false(default)
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(curr => !curr);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;