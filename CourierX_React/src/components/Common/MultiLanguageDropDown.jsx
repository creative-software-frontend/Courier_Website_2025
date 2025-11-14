import { IoMdCheckmarkCircle } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const MultiLanguageDropDown = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <ul className="mb-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-white"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <GrLanguage /> {currentLanguage.toUpperCase()}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <p className="dropdown-item mb-0 text-xs" href="#">
              {t("select_language")}
            </p>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              onClick={() => changeLanguage("bn")}
              className="dropdown-item"
              href="#"
            >
              <IoMdCheckmarkCircle
                className={
                  currentLanguage === "bn"
                    ? "text-warning-dark"
                    : "text-warning-dark visibility-hidden"
                }
              />{" "}
              {t("bengali")}
            </a>
          </li>
          <li>
            <a
              onClick={() => changeLanguage("en")}
              className="dropdown-item"
              href="#"
            >
              <IoMdCheckmarkCircle
                className={
                  currentLanguage === "en"
                    ? "text-warning-dark"
                    : "text-warning-dark visibility-hidden"
                }
              />{" "}
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MultiLanguageDropDown;
