import { useState, useEffect } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    // stop refreshing
    event.preventDefault();
    // if toDo is empty
    if (toDo === "") {
      // kill the function
      return;
    };
    // currArrray would be argument
    setToDos(currArray => [toDo, ...currArray]);
    // After summiting, make toDo empty
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do,,," 
        />
        <button>Add To Do </button>
      </form>
      <hr />
      <ul>
        {toDos.map((curr_todo, index) => (
          <li key={index} >{curr_todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;