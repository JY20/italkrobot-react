import React from "react";
import img from "../images/Logo.png";
import Header from "../eventsfile/header"
import electronic from "../images/Electronic.jpg";
import Sect from "./sections"

class Products extends React.Component {
  render() {
    return (
      <div>
        <Header width={this.props.width} pagetitle="Services"/>
        {/* <Produ
          price={100}
          id={100}
          img={img}
          name={"Jimmy"}
          description={"......."}
          width={this.props.width}
        /> */}
        <Sect width={this.props.width} image={electronic} description="repair"/>
      </div>
    );
  }
}

export default Products;
