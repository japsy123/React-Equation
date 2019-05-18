import React, { Component } from "react";
import Score from "./Score";

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <p className="text">{}</p>
        <button>True</button>
        <button>False</button>

        <Score />
      </div>
    );
  }
}
