
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue]= useState("");
  const onChangeText = (event) => {
    setInputValue( event.target.value );
  }

  return (
    <div>
      <form>
        <label>Enter your name:</label>
        <input onChange={onChangeText} type="text" />
      </form>
        <p>{`Hello ${inputValue}!`}</p>
    </div>
  )
}

export default App
