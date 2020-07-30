import React from "react";
import Header from "./header";
import Body from "./body";
import MyImage from "c:/Users/Jimmy/italkrobot-react/src/MF.jpg";

class Events extends React.Component {
  render() {
    return (
      <p>
        <Header width={this.props.width} />
        <Body
          fontS={this.props.width / 70}
          imageLink={MyImage}
          caption={"this is an avocado"}
          width={this.props.width}
          height={this.props.height}
        />
      </p>
    );
  }
}

export default Events;
