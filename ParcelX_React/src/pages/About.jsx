const AboutPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper">
        <div className="about">
          <h2>About Us</h2>
          <p style={{ lineHeight: "25px" }}>
            we have the experience to deliver it on time and on budget. We
            provide a wide variety of services to meet all your START and
            Scheduled / Route delivery needs with service available 24/7.
          </p>
        </div>
        <div style={{ marginTop: "35px" }} className="choose">
          <h2>Why Choose Us</h2>
          <ul>
            <li>
              If you have small parcels or documents, your products will reach
              to your customer hassle free as we have large number of bikers in
              Dhaka city who are happy to help.
            </li>

            <li>
              Our company directors are well established and well known, so
              there is no problem with trust issues.
            </li>
            <li>
              You can see your product condition through our tracking system.
            </li>
            <li>
              You can keep your products in our ware house with free of cost.
            </li>
          </ul>
        </div>
        <div className="about" style={{ marginTop: "35px" }}>
          <h2>Our Vission</h2>
          <p style={{ lineHeight: "25px" }}>
            Dhaka is becoming more congested and it has now become almost
            impossible to move around in Dhaka. Our aim is to provide quick and
            safest delivery door to door by motor cycle and bicycle to reach
            your product to your customer on time our target is to provide on
            stop solution that you don’t have to worry about your product to
            deliver on your destination. our vision is also to provide hassle
            free delivery to the last mileage of the country and deliver most of
            the countries by time to time.
          </p>
        </div>
        <div style={{ marginTop: "35px" }} className="choose">
          <h2>Our Mission</h2>
          <p style={{ lineHeight: "25px", marginBottom: "20px" }}>
            Our delivery services are primarily e commerce business. But we also
            deliver non e-commerce company, shops and other company who wants to
            deliver documents, small parcel etc. Our target is:
          </p>
          <ul>
            <li>
              To provide total logistics support to our client one stop
              solution.
            </li>
            <li>
              As e-commerce is now growing business, our target is to grow our
              business through quality service and value for money.
            </li>
            <li>
              To be innovative, professional and build business partnerships.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "35px" }} className="choose team">
          <h2>What Our Team Says</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {/* <img
              src="/team-say.jpg"
              alt=""
              style={{
                width: "250px",
                objectFit: "cover",
                border: "1px solid #b7050a",
                padding: "2px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            /> */}
            <div>
              <p
                style={{
                  lineHeight: "25px",
                  position: "relative",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "60px",
                    position: "absolute",
                    left: "-20px",
                    top: "0px",
                  }}
                >
                  {" "}
                  &ldquo;
                </span>{" "}
                We have talented riders and talented team personally. We work on
                suggestion of the merchant what they desired for smooth
                delivery, payments are made quickly without any hassle. We
                accept any kind of advice from our merchant.our aim is to not
                only deliver the products we also build a strong relationship
                with merchant and work like on behalf of the company. we
                personally take care every single product.
              </p>
              <h4
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  marginLeft: "30px",
                }}
              >
                - Chairman OF ParcelX
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
