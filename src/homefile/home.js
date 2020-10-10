import React from "react";
import RecentImage from "../images/FFF.jpg";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "5px solid black",
          height: (this.props.width * 2) / 6,
        }}
      >
        <img
          src={RecentImage}
          style={{ width: (this.props.width * 2) / 3, float: "left" }}
        />
        <h1 style={{ fontSize: this.props.width / 20 }}>#COVID19 </h1>
        <p style={{ fontSize: this.props.width / 50 }}>
          Help us donate more PPE to our Front line Healthcare workers
        </p>
        <a
          style={{ fontSize: this.props.width / 50, color: "green" }}
          href="https://www.gofundme.com/f/xx3vd-face-shields-for-front-line-workers?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet"
        >
          DONATE NOW
        </a>
      </div>
    );
  }
}

export default Home;
