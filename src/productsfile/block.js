import React from "react";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dimensions: {} };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: { height: img.offsetHeight, width: img.offsetWidth },
    });
  }
  render() {
    const { width, height } = this.state.dimensions;
    return (
      <div>
        <img
          src={this.props.image}
          style={{
            width: this.props.width * 0.98,
          }}
          onLoad={this.onImgLoad}
        />
        <p
          style={{
            fontSize: this.props.width / 20,
            textAlign: "left",
            paddingLeft: this.props.width * 0.01,
          }}
        >
          {this.props.title}
        </p>
        <p
          style={{
            fontSize: this.props.width / 50,
            textAlign: "left",
            paddingLeft: this.props.width / 100,
          }}
        >
          {this.props.content}
        </p>
      </div>
    );
  }
}

export default Block;
