import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container py-5 pb-3 mb-3">
      <div className="row">
        <div className="col-12 col-lg-3 mb-4">
          <img src="/logo.png" alt="" className="mb-4 footer_logo" />
          <p className="my-0 fw-medium">
            {t(
              "House: 6/A, Main Road, Block-C, Dhaka"
            )}
          </p>
          <p className="fw-medium mb-0">
            <span className="fw-regular">{t("email")}:</span> info@CourierX.com
          </p>
          <p className="fw-medium mb-0">
            <span className="fw-regular">{t("hotline")}:</span>{" "}
            {t("0196600000")}
          </p>
        </div>

        <div className="col-12 col-lg-3  mb-4">
          <h4 className="mb-3 text-lg">{t("company")}</h4>
          <p className="fw-medium text-medium">{t("contact_us")}</p>
          <Link to="/return" className="link">
            {" "}
            <p className="fw-medium text-medium">{t("return_policy")}</p>{" "}
          </Link>
          <Link to="/term" className="link">
            <p className="fw-medium text-medium">{t("terms_and_conditions")}</p>
          </Link>
          <Link to="/lost-policy" className="link">
            <p className="fw-medium text-medium">{t("lost_policy")}</p>
          </Link>
          <Link to="/exchange-policy" className="link">
            <p className="fw-medium text-medium">{t("exchange_policy")}</p>
          </Link>
        </div>

        <div className="col-12 col-lg-3  mb-4">
          <h4 className="mb-3 text-lg">{t("quick_link")}</h4>

          <Link to="#" className="link">
            <p className="fw-medium text-medium">{t("merchant_login")}</p>
          </Link>
          <Link to="#" className="link">
            <p className="fw-medium text-medium">{t("rider_login")}</p>
          </Link>
        </div>

        <div className="col-12 col-lg-3  mb-4">
          <h4 className="mb-3 text-lg">{t("follow_us")}</h4>
          <div className="d-flex mt-c-5">
            <a
              href="https://www.facebook.com"
              target="_black"
            >
              <i className="footer_social fa fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_black"
            >
              {" "}
              <i className="footer_social fa fa-linkedin"></i>
            </a>
          </div>
          <div className="app_wrapper d-flex flex-column my-1 gap-0">
            <a
              href="https://play.google.com/store/apps/"
              target="_blank"
            >
              <img className="footer_app_logo" src="/google-play.png" alt="" />
            </a>
            <a
              href="https://play.google.com/"
              target="_blank"
              className="rider"
            >
              <img className="footer_app_logo" src="/google-play.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="bottom-details border-top-primary pt-3">
        <div class="bottom_text d-flex justify-content-between">
          <span class="copyright_text text-medium">
            © 2024 {t("CourierX")}
            <a href="#" target="_blank"></a>.
          </span>

          <span class="developed text-medium">
            {t("developed_by")}
            <a
              className="text-success fw-bold text-decoration-none"
              target="_blank"
              href="https://creativesoftware.com.bd/"
            >
              {" "}
              {t("Creative Software")}.
            </a>
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
