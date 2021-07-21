import "./App.css";
 import Accordion from "./components/accordion/accordion";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion/>
      </div>
    );
  }
}

export default App;
