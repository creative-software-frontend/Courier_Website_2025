// react font awesome 5 icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
const ContactForm = () => {
  return (
    <>
      {/* contact form section */}
      <section className="contact-form">
        {/* main wrapper */}
        <div className="main__wrapper">
          <div className="contact_us_green">
            <div className="responsive-container-block big-container">
              <div className="responsive-container-block contact_container">
                {/* contact form left */}
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
                  id="i69b-2"
                >
                  <form className="form-box" action="#">
                    <div className="container-block form-wrapper">
                      <div className="head-text-box">
                        <p className="text-blk contactus-head">Contact us</p>
                        <p className="text-blk contactus-subhead">
                         
                        </p>
                      </div>
                      <div className="responsive-container-block">
                        <div
                          className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                          id="i10mt-6"
                        >
                          <p className="text-blk input-title">NAME</p>
                          <input
                            className="input"
                            id="ijowk-6"
                            name="FirstName"
                          />
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                          <p className="text-blk input-title">BUSINESS NAME</p>
                          <input
                            className="input"
                            id="indfi-4"
                            name="Last Name"
                          />
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                          <p className="text-blk input-title">EMAIL</p>
                          <input className="input" id="ipmgh-6" name="Email" />
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                          <p className="text-blk input-title">PHONE NUMBER</p>
                          <input
                            className="input"
                            id="imgis-5"
                            name="PhoneNumber"
                          />
                        </div>
                        <div
                          className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                          id="i634i-6"
                        >
                          <p className="text-blk input-title">
                            WHAT DO YOU HAVE IN MIND
                          </p>
                          <textarea
                            className="textinput"
                            id="i5vyy-6"
                            placeholder="Please enter query..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="btn-wrapper">
                        <button className="submit-btn">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
                  id="ifgi"
                >
                  {/* contact form right */}
                  <div className="container-box">
                    <div className="text-content">
                      <p className="text-blk contactus-head">Contact us</p>
                      <p className="text-blk contactus-subhead"></p>
                    </div>
                    <div className="workik-contact-bigbox">
                      <div className="workik-contact-box">
                        <div className="phone text-box">
                          <i>
                            <FaPhoneAlt />
                          </i>
                            <p className={"address"}>
            
                      </p>
           
            <p className={"mobile"}>014011</p>
                        </div>
                        <div className="address text-box">
                          <i>
                            <FaEnvelope />
                          </i>
                          <p className="contact-text">
                         info@ParcelX.com
                          </p>
                        </div>
                        <div className="mail text-box">
                          <i>
                            <FaMapMarkerAlt />
                          </i>
                          <p className="contact-text">
                          House-19, Road-3, Block-B, Dhaka-1219
                          </p>
                        </div>
                      </div>
                      <div className="social-media-links">
                        <a href="https://www.facebook.com/" className="social-link">
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                        <a href="#" className="social-link">
                          <i>
                            <FaYoutube />
                          </i>
                        </a>
                        <a href="" className="social-link">
                          <i>
                            <FaGithub />
                          </i>
                        </a>
                        <a href="" className="social-link">
                          <i>
                            <FaInstagram />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end main wrapper */}
      </section>
      {/* end contact form section */}
    </>
  );
};

export default ContactForm;
