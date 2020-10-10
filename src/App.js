import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./menufile/menu";
import Events from "./eventsfile/events";
import Projects from "./projectsfile/projects";
import Contact from "./contactfile/contact";
import Home from "./homefile/home";
import Products from "./productsfile/products";
import { Link, Router, BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyImage from "./images/FFF.jpg";
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
