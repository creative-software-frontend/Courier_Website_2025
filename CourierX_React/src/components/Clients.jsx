import React, { Component } from "react";

// slider component for carousel slider from react slick
import Slider from "react-slick";

export default class Clients extends Component {
  render() {
    // slider configuration
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      // Client Section
      <section className="section clients">
        {/* client heading */}
        <h2 className="section-heading"> Clients</h2>
        {/* clients wrapper */}
        <div
          className="main__wrapper clients__container"
          style={{ marginTop: "20px" }}
        >
          <Slider {...settings}>
            <div className="client-img-wrapper">
              {/* client 1 */}
              <img
                src="/clients/1.png"
                alt=""
                style={{
                  height: "150px",
                  width: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="client-img-wrapper">
              {/* client 2 */}
              <img
                src="/clients/2.png"
                alt=""
                style={{
                  height: "150px",
                  width: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="client-img-wrapper">
              {/* client 3 */}
              <img
                src="/clients/3.png"
                alt=""
                style={{
                  height: "150px",
                  width: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="client-img-wrapper">
              {/* client 4 */}
              <img
                src="/clients/4.png"
                alt=""
                style={{
                  height: "150px",
                  width: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
          </Slider>
        </div>
        {/* end clients wrapper */}
      </section>
      // end client section
    );
  }
}
