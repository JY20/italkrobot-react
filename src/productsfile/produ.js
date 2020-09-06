import React from "react";

export default class Produ extends React.Component {
  render() {
    return (
      <article id={this.props.id} style={{ float: "left" }}>
        <div style={{ border: "5px solid black" }}>
          <img
            style={{ width: this.props.width / 4 }}
            src={this.props.img}
            title={this.props.name}
          />
          <h1 style={{ width: this.props.width / 5, float: "center" }}>
            {this.props.name}
          </h1>
          <h2 style={{ width: this.props.width / 10 }}>
            {this.props.description}
          </h2>
          <span>$ {this.props.price}</span>
          <br />
          <button style={{ width: this.props.width / 4 }}>Add</button>
        </div>
      </article>
    );
  }
}
