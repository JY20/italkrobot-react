import React from "react";

class Header extends React.Component {
  state = {
    fontSize: 100,
  };
  render() {
    return <header style={{ fontSize: this.props.width / 10 }}>Events</header>;
  }
}

export default Header;
