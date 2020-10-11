import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./menufile/menu";
import Bottom from "./menufile/bottom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 512,
      Eventsvis: true,
      inputs: "",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Menu height={this.state.height} width={this.state.width} />
            <br />
            <Bottom height={this.state.height} width={this.state.width} />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
