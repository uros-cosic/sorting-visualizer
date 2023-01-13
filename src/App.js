import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Legend from "./components/Legend";
import Table from "./components/Table";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      algorithm: "",
    };

    this.setAlgorithm = this.setAlgorithm.bind(this);
  }

  setAlgorithm(alg) {
    /* Set state algorithm to alg */
    this.setState({
      algorithm: alg,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar setAlgorithm={this.setAlgorithm} />
        <Legend algorithm={this.state.algorithm} />
        <Table algorithm={this.state.algorithm} />
      </div>
    );
  }
}

export default App;
