import React from "react";
import Produ from "./produ";
import img from "../images/Logo.png";

class Products extends React.Component {
  render() {
    return (
      <div>
        <p>Products</p>
        <Produ
          price={100}
          id={100}
          img={img}
          name={"Jimmy"}
          description={"......."}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default Products;
