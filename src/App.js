import { useState, useEffect } from "react";

function App() {
  
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('I run all the time');

  // useEffect helps us to call a code only one time
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  
  // This code runs every time the keyword changes
  useEffect(() => {
    // if the keyword is longer than 5 -> working
    if (keyword.length > 5) {
      console.log(`I run when ${keyword} changes`);
    }
  }, [keyword]);
  
  // This code runs every time the counter changes
  useEffect(() => {
    console.log(`I run when ${counter} chagnes`);
  }, [counter])

  // This code runs every time either the counter or keyword changes
  useEffect(() => {
    console.log('I run when counter or keyword changes');
  },[counter, keyword])

  return (
    <div>
      <input 
      value={keyword} 
      onChange={onChange} 
      type="text" 
      placeholder="Search here...">
      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;