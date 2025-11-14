import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const siteName = import.meta.env.REACT_APP_SITE_NAME;
  const siteDescription = import.meta.env.REACT_APP_SITE_DESCRIPTION;
  return (
    <>
      <footer className={"footer"}>
        <div className={"content"}>
          <div className={"top"}>
            <div className={["logo-details"]}>
              {/*<i className={.fab fa-slack]></i>*/}
              <Link to="/">
                <img
                  src="/logo.png"
                  alt=""
                  style={{ width: "350px", objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className={"contat-details"}>
              {/*<i className={.fab fa-slack]></i>*/}
              <span className={"contact"}></span>
            </div>

            <div className={"media-icons"}>
              <Link to="#">
                <i>
                  <FaFacebookF />
                </i>
              </Link>
              <Link to="#">
                <i>
                  <FaTwitter />
                </i>
              </Link>
              <Link
                to="#"
                target="_blank"
              >
                <i>
                  <FaInstagram />
                </i>
              </Link>
              <Link to="#">
                <i>
                  <FaLinkedinIn />
                </i>
              </Link>
              <Link to="#">
                <i>
                  <FaYoutube />
                </i>
              </Link>
            </div>
          </div>
          <div className={"link-boxes"}>
            {/* footer col 1 */}
            <ul className={"box"}>
              <li className={"link_name"}>Company</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              {/* <li>
                <Link to="/register">Get started</Link>
              </li> */}
            </ul>
            {/* footer col 2 */}
            <ul className={"box"}>
              <li className={"link_name footer_services"}>Services</li>
              <li>
                <a to="#">Daily Pick up</a>
              </li>
              <li>
                <a to="#">Online Management</a>
              </li>
              <li>
                <a to="#">Cash On Delivery</a>
              </li>
              <li>
                <a to="#">Real Time Tracking</a>
              </li>
              <li>
                <a to="#">Advanced Customer Service</a>
              </li>
              <li>
                <a to="#">Faster Payment Service</a>
              </li>
            </ul>

            {/* footer col 4 */}
            {/* <ul className={"box"}> */}

            {/*  <div className="rider-app">
                <a href="https://play.google.com/store/apps/details?id=com.rider.olectraexpress&pcampaignid=web_share" target="_blank" >
                  <img
                    src="/google-play.png"
                    alt="app store"
                    style={{ width: "250px", objectFit: "contain" }}
                  />
                </a>
              </div>*/}
            {/* </ul> */}
            {/* footer col 5 */}
            <ul className={"box input-box wrapper_subscribe"}>
              <li className={"link_name footer_subscribe"}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
              <div className="mb-3 mt-4">
              <li className={"link_name footer_subscribe"}>Merchant Apps</li>
                <a
                  href="https://drive.google.com/BIfQsharing"
                  target="_blank"
                >
                  <img
                    src="/google-play.png"
                    alt="play store"
                    style={{ width: "250px", objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="mb-3 mt-4">
              <li className={"link_name footer_subscribe"}>Rider Apps</li>
                <a
                  href="https://drive.google.com/filsharing"
                  target="_blank"
                >
                  <img
                    src="/google-play.png"
                    alt="play store"
                    style={{ width: "250px", objectFit: "contain" }}
                  />
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className={["bottom-details"]}>
          <div className={"bottom_text"}>
            <span className={"copyright_text"}>
              © 2024 SmartX. All rights reserved
              <a href="#" target="_blank"></a>
            </span>
            <span className="developed">
              Develop by
              <a target="_blank" href="https://creativesoftware.com.bd/">
                {" "}
                Creative Software.
              </a>
            </span>
            <span className={"policy_terms"}>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
