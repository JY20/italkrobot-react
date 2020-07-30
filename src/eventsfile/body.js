import React from "react";

class Body extends React.Component {
  state = {
    fontSize: 12,
  };
  render() {
    return (
      <section
        style={{
          fontSize: this.props.width / 50,
          width: this.props.width * 0.75,
          paddingLeft: 10,
        }}
      >
        <img
          style={{ width: this.props.width * 0.75 }}
          src={this.props.imageLink}
        />
        <br />
        <p style={{ float: "left" }}>
          {this.props.caption} {this.props.width / 100}
        </p>
      </section>
    );
  }
}

export default Body;
