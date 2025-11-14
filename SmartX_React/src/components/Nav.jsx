// nav icons - menu & close
import { CgCloseR, CgMenu } from "react-icons/cg";
import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav
        className={"navbar"}
        style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <div
          className={openMenu ? `active menu` : "menu "}
          style={{ marginRight: "20px" }}
        >
          <ul className={"navbarList"}>
            {/* nav item for routing */}
            {/* <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="/"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </Link>
            </li>*/}
            {/* nav item for routing */}
            <li className={"navbarItem"}>
              <Link
                className={"navbarLink"}
                to="/service-area"
                onClick={() => setOpenMenu(false)}
              >
                Service Area
              </Link>
            </li>
            {/* nav item for routing */}
            {/* <li className={"navbarItem"}>
              <Link
                className={"navbarLink"}
                onClick={() => setOpenMenu(false)}
                to="/price"
              >
                Price
              </Link>
            </li> */}
            {/* nav item for routing */}
           {/*  <li className={"navbarItem"}>
              <Link
                className={"navbarLink"}
                onClick={() => setOpenMenu(false)}
                to="/about"
              >
                About Us
              </Link>
            </li>*/}
            {/* nav item for routing */}
            <li className={"navbarItem"}>
              <Link
                className={"navbarLink"}
                onClick={() => setOpenMenu(false)}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <div className="mobile-auth">
              <a
                onClick={() => setOpenMenu(false)}
                href="https://system.SmartX.com/"
                target="_blank"
                style={{ marginRight: "0px", display: "block" }}
              >
                <button
                  className="nav__login_btn"
                  style={{
                    border: "1px solid white",
                    padding: "10px 30px",
                    marginRight: "0px",
                  }}
                >
                  Log in
                </button>
              </a>
              <a
                onClick={() => setOpenMenu(false)}
                target="_blank"
                href="https://system.SmartX.com/merchant-registration"
              >
                <button
                  className={"nav__regsiter_btn"}
                  style={{ padding: "10px 20px", marginLeft: "0px" }}
                >
                  Register
                </button>
              </a>
            </div>
            <div className="d-flex gap-3 mobile-care">
              <i className="text-danger">
                <FaPhoneAlt />
              </i>
              <p className="contact text-danger fw-bold"> 01401177455</p>
            </div>
          </ul>

          {/* //nav icon */}
          <div className={"mobile-navbar-btn"}>
            {/* menu icon */}
            <CgMenu
              name="menu-outline"
              className={"mobile-nav-icon"}
              onClick={() => setOpenMenu(true)}
            />
            {/* close icon */}
            <CgCloseR
              name="close-outline"
              className={"mobile-nav-icon close-outline"}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
        <div className="authentication">
          <a
            onClick={() => setOpenMenu(false)}
            href="https://system.SmartX.com/"
            
            style={{ marginRight: "15px" }}
          >
            <button
              className="nav__login_btn"
              style={{ border: "1px solid white" }}
            >
              Log in
            </button>
          </a>
          <a
            onClick={() => setOpenMenu(false)}
            
            href="https://system.SmartX.com/merchant-registration"
          >
            <button className={"nav__regsiter_btn"}>Register</button>
          </a>
        </div>
        {/* <div className="customer-care">
          <i className="text-white">
            <FaPhoneAlt />
          </i>
          <p className="contact text-white">+880 1885 958 754</p>
        </div> */}
      </nav>
    </>
  );
};

export default Nav;
