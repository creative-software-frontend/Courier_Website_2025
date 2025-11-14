const ContactPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <h2>Contact</h2>
          
        </div>
        <div className="row mt-5">
          <div
            className="col-lg-7 pe-5"
            style={{ borderRight: "1px solid #aeaeae" }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">NAME</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">BUSINESS NAME</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">EMAIL</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label fw-bold">PHONE NUMBER</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    WHAT DO YOU HAVE IN MIND
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Please enter query"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="btn btn-dark">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-5">
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <p>
                <i style={{ width: "18px" }} className="fa fa-phone"></i>{" "}
                0128000000
              </p>
            </div>
            <div className="mb-4">
              <p>
                <i style={{ width: "18px" }} className="fa fa-envelope"></i>{" "}
                info@CourierX.com
              </p>
            </div>
            <div className="mb-4">
              <p>
                <i style={{ width: "18px" }} className="fa fa-map-marker"></i>{" "}
                House-19, Road-3, Block-B, Dhaka-1219
              </p>
            </div>
            <div className="contact__social d-flex gap-4 mt-5">
              <div>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
