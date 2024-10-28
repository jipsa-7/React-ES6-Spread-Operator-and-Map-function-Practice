import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value; //initializing a constant with the value of targetted component.
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText]; //adding an item inputText to the array of prevItems using spread operator
    });
    setInputText(""); //To clear the textbox after each button click.
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((items) => (
            <li>{items}</li>
          ))}
          {/**map through all of the items, for each item create an li and put that item in that li.  */}
        </ul>
      </div>
    </div>
  );
}

export default App;
