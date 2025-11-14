import SectionTitle from "../Common/SectionTitle";
import WhyUsItem from "./WhyUsItem";

import { FaRegLightbulb } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { BsLightning } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ background: "#F1F3F4", padding: "20px" }}>
      <SectionTitle value={t("Why Us")} />
      <div className="container">
        <div className="row">
          {/* 1 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <FaRegLightbulb
                  className="text-vl text-success"
                  style={{ fontSize: "5rem" }}
                />
                <div>
                  <h3 className="fw-medium">{t("fastest_payment")}</h3>
                  {/*  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p>*/}
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <RiMapPin2Line className="text-vl text-success" />
                <div>
                  <h3 className="fw-medium">{t("cod_charge")}</h3>
                  {/*  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <BsLightning className="text-vl text-success" />
                <div>
                  <h3 className="fw-medium">{t("same_day_delivery")}</h3>
                  {/* <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <BsBox className="text-vl text-success" />
                <div>
                  <h3 className="fw-medium">{t("product_liability")}</h3>
                  {/* <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <FaTruckFast className="text-vl text-success" />
                <div>
                  <h3 className="fw-medium">{t("home_delivery")}</h3>
                  {/*  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="col-12 col-md-4">
            <div className="p-3 mb-4">
              <div className="d-flex gap-3">
                <FaHandHoldingUsd className="text-vl text-success" />
                <div>
                  <h3 className="fw-medium">{t("parcel_return")}</h3>
                  {/*   <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur, consequuntur vitae? Architecto quod ducimus ab
                    voluptas ipsa porro eos quas.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
