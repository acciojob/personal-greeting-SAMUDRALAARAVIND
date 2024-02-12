
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue]= useState("");

  const onChangeText = (event) => {
    setInputValue( event.target.value );
  }

  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <input id="name" onChange={onChangeText} />
        {inputValue && <p>{`Hello ${inputValue}!`}</p>}
    </div>
  )
}

export default App
