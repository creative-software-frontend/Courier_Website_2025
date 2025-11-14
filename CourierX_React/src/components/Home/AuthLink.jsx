import { useTranslation } from "react-i18next";

const AuthLink = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="container authLink"
      style={{ marginTop: "-100px", zIndex: "10000", position: "relative" }}
    >
      <div className="d-flex justify-content-center align-items-center gap-4 my-4">
        <div className="card__link">
          <a href="https://system.CourierX.com/merchant-registration" target="_blank">
            <p>
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              {t("become_a_merchant")}
            </p>
          </a>
        </div>
        <div className="card__link">
          <a href="https://system.CourierX.com" target="_blank">
            <p>
              <i className="fa fa-sign-in" aria-hidden="true"></i> {t("log_in")}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthLink;
