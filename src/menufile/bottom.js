import React from "react";

class bottom extends React.Component {
  render() {
    return (
      <div>
        <section
          style={{
            backgroundColor: "#252525",
            width: this.props.width * 0.98,
            height: this.props.width / 12
          }}
        >
          <br />© Copyright 2020 italkrobot- All Rights Reserved
        </section>
      </div>
    );
  }
}

export default bottom;
