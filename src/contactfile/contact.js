import React from "react";

class Contact extends React.Component {
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
        <section style={{ width: this.props.width }}>
          <button>
            <img src="../images/icons/facebook.png" onClick={this.myfunction} />
          </button>
        </section>
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
        </form>
      </div>
    );
  }
}

export default Contact;
