import React from "react";

class D extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <header style={{ fontSize: this.props.width / 10 }}>
            Contact Us
          </header>
          <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <p>{this.state.value}</p>
          <br />
          <button></button>
        </form>
      </div>
    );
  }
}

export default D;
