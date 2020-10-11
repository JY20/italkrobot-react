import React from "react";
import RecentImage from "../images/FFF.jpg";
import ReactPlayer from "react-player";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          // height: (this.props.width * 2) / 6,
         height: (this.props.width*0.8)*0.5625 + this.props.width / 10,
         
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7cdYkC1_0qw&feature=youtu.be"
          width= {this.props.width*0.8}
          height= {(this.props.width*0.8)*0.5625}
          style={{paddingLeft: this.props.width*0.1}}
        />
        <section
          style={{
            width: this.props.width * 0.98,
            height: this.props.width / 10
          }}
        >
          <p style={{ fontSize: this.props.width / 50, }}>
          #COVID19 Help us donate more PPE to our Front line Healthcare workers
          </p>
          <a
            style={{ fontSize: this.props.width / 50, color: "green" }}
            href="https://www.gofundme.com/f/xx3vd-face-shields-for-front-line-workers?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet"
          >
            DONATE NOW
          </a>
        </section>
      </div>
    );
  }
}

export default Home;
