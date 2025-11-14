import { Link, useLocation } from "react-router-dom";
import MultiLanguageDropDown from "./Common/MultiLanguageDropDown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="nav_logo" src="/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-center"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-center w-100">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-white fw-medium ${isActive(
                    "/about"
                  )}`}
                  to="/about"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white fw-medium ${isActive(
                    "/contact"
                  )}`}
                  to="/contact"
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-white fw-medium ${isActive(
                    "/term"
                  )}`}
                  to="/term"
                >
                  {t("terms_and_condition")}
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-medium"
                  href="https://system.CourierX.com/merchant-registration"
                >
                  {t("sign_up")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-medium"
                  href="https://system.CourierX.com"
                >
                  {t("log_in")}
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex language_contact gap-3 align-items-center">
            <div
              className="d-flex language_contact"
              style={{ border: "1px solid white" }}
            >
              <button
                onClick={() => changeLanguage("bn")}
                className={`${
                  currentLanguage == "bn"
                    ? "bg-white bg-none text-dark"
                    : "bg-none text-white"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  currentLanguage == "en"
                    ? "bg-white bg-none text-dark"
                    : "bg-none text-white"
                }`}
              >
                Eng
              </button>
            </div>
            <p className="text-warning fw-medium d-flex align-items-center gap-2 mb-0 text-medium">
              <i className="fa fa-phone text-white"></i> {t("0196600000")}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
