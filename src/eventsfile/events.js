import React from "react";
import Header from "./header";
import Block from "../productsfile/block";
import I1 from "../images/EDH.jpg";

class Events extends React.Component {
  render() {
    return (
      <p>
        <Header width={this.props.width} pagetitle="Events" />
        <Block
          width={this.props.width}
          image={I1}
          title={"event1"}
          content={"..."}
        />
        <Block
          width={this.props.width}
          image={I1}
          title={"event1"}
          content={"..."}
        />
      </p>
    );
  }
}

export default Events;
