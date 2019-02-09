import React, { Component } from 'react';
import AppBar from "./Components/AppBar";
import LayoutScreen from "./Components/LayoutScreen";
import InputScreen from "./Components/InputScreen";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonValue: {

      },
    }
    this.updateJson=this.updateJson.bind(this);
  }
  updateJson(jsonValue) {
    this.setState({
      jsonValue: jsonValue,
    });
  }
  render() {
    let jsonValue = this.state.jsonValue;
    return (
      <React.Fragment>
        <AppBar />
        <div className="app-body">
          <LayoutScreen jsonValue={jsonValue} />
          <InputScreen updateJson={this.updateJson} />
        </div>
        {console.log(this.state.jsonValue)}
      </React.Fragment>

    );
  }
}

export default App;
