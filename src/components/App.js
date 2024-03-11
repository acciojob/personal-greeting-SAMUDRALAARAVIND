
// import React, {Component} from "react";
import './../styles/App.css';

// const App = () => {
//   const [inputValue, setInputValue]= useState("");
//   const onChangeText = (event) => {
//     setInputValue( event.target.value );
//   }

//   return (
//     <div>
//       <form>
//         <label>Enter your name:</label>
//         <input onChange={onChangeText} type="text" />
//       </form>
//         <p>{`Hello ${inputValue}!`}</p>
//     </div>
//   )
// }

import React, { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onchangeText = (event) => {
        const newValue = event.target.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name:</label>
                <input id="input" value={this.state.value} onChange={this.onchangeText} />
                {this.state.value ? <p>Hello {this.state.value}!</p> : null}
            </div>
        );
    }
}

export default Greeting;