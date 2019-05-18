import React from "react";
import logo from "./logo.svg";
import Game from "./Game";
import "./App.css";
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Mental Math</h2>
        <div className="equation">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
