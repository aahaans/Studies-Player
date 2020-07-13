import React, { Component } from "react";
import "./styles.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>Aahaan's audio book</div>
        <div className="links">Lesson Screen</div>
      </nav>
    );
  }
}
