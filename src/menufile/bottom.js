import React from "react";

class bottom extends React.Component {
  render() {
    return (
      <div
        style={{
          height: this.props.width / 12 + 100,
        }}
      >
        <section
          style={{
            backgroundColor: "#252525",
            width: this.props.width * 0.98,
          }}
        >
          <br />© Copyright 2020 italkrobot- All Rights Reserved
          <br />
        </section>
      </div>
    );
  }
}

export default bottom;
