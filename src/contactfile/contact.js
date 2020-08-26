import React from "react";
import FB from "../images/icons/facebook.png";
import IG from "../images/icons/instagram.png";
import TW from "../images/icons/twitter.png";
import FollowUs from "./followus";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      links: [
        "https://www.facebook.com/iTalkRobot/",
        "https://www.instagram.com/italkrobot/",
        "https://twitter.com/italkrobot",
      ],
      icons: [FB, IG, TW],
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const items = [];

    for (var i = 0; i < this.state.links.length; i++) {
      items.push(
        <FollowUs
          width={this.props.width}
          icon={this.state.icons[i]}
          link={this.state.links[i]}
        />
      );
    }

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
        </form>
        <section>
          <header
            style={{
              float: "left",
              fontSize: this.props.width / 30,
            }}
          >
            Follow Us:
          </header>
          {items}
          <a
            href={"mailto: italkrobot@live.com"}
            style={{ float: "right", fontSize: this.props.width / 30 }}
          >
            italkrobot@live.com
          </a>
          <header style={{ float: "right", fontSize: this.props.width / 30 }}>
            Email Us:
          </header>
        </section>
      </div>
    );
  }
}

export default Contact;
