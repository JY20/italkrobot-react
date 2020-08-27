import React from "react";

class FollowUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        href={this.props.link}
        style={{
          float: "left",
        }}
      >
        <img
          style={{
            width: this.props.width / 30,
            paddingTop: this.props.width / 100,
            paddingLeft: this.props.width / 100,
          }}
          src={this.props.icon}
        />
      </a>
    );
  }
}

export default FollowUs;
