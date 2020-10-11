import React from "react";

export default class sect extends React.Component {
  render() {
    return (
      <section style= {{height: (this.props.width * 2) / 9,
        border: "5px solid black", 
        backgroundColor: "light grey"}}>
        <img
          style={{
            width: this.props.width / 3,
            float: "left"
          }}
          src={this.props.image}
        />
        <p>
            {this.props.description}
            {this.props.width}
        </p>
      </section>
    );
  }
}
