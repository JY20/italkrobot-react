import React, { useState } from "react";
import Logo from "c:/Users/Jimmy/italkrobot-react/src/images/Logo.png";
import ButtonMenu from "./buttonmenu";
import {
  Link,
  Router,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Events from "../eventsfile/events";
import Home from "../homefile/home";
import Products from "../productsfile/products";
import Projects from "../projectsfile/projects";
import Contact from "../contactfile/contact";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <section
            style={{
              backgroundColor: "#252525",
              width: this.props.width * 0.98,
              height: this.props.width / 12,
            }}
          >
            <img
              style={{
                height: this.props.width / 14,
                float: "left",
                paddingTop: (this.props.width / 12 - this.props.width / 14) / 2,
                paddingLeft: this.props.width / 50,
              }}
              src={Logo}
            />
            <Link to="/contactus">
              <ButtonMenu label="Contact Us" width={this.props.width} />
            </Link>
            <Link to="/products">
              <ButtonMenu label="Products" width={this.props.width} />
            </Link>
            <Link to="/projects">
              <ButtonMenu label="Projects" width={this.props.width} />
            </Link>
            <Link to="/events">
              <ButtonMenu label="Events" width={this.props.width} />
            </Link>
            <Link to="/home">
              <ButtonMenu label="Home" width={this.props.width} />
            </Link>
          </section>
          <br />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home width={this.props.width} height={this.props.height} />
            </Route>
            <Route path="/events">
              <Events width={this.props.width} height={this.props.height} />
            </Route>
            <Route path="/projects">
              <Projects width={this.props.width} height={this.props.height} />
            </Route>
            <Route path="/products">
              <Products width={this.props.width} height={this.props.height} />
            </Route>
            <Route path="/contactus">
              <Contact width={this.props.width} height={this.props.height} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Menu;
