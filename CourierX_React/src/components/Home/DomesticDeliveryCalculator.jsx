import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import deliveryCalculatorData from "../../db/deliveryCalculatorData";
import { useFrontendContext } from "../../context/FrontendContext";

const DomesticDeliveryCalculator = () => {
  const { t } = useTranslation();
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(null);
  const [zone, setZone] = useState("");

  const { badgeText, setBadgeText } = useFrontendContext();

  const handleCalculate = () => {
    const zone = deliveryCalculatorData.zones.Dhaka.includes(deliveryArea)
      ? "Dhaka"
      : deliveryCalculatorData.zones.SubDhaka.includes(deliveryArea)
      ? "SubDhaka"
      : "OutsideDhaka";
    setZone(zone);

    const charge = deliveryCalculatorData.prices[zone][weight];
    setDeliveryCharge(charge);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setDeliveryCharge(null);
  };
  const handleClick = () => {
    const updatedBadgeText =
      badgeText == "Domestic" ? "International" : "Domestic";
    setBadgeText(updatedBadgeText);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="mb-3"
        style={{ border: "1px solid #333", borderRadius: "10px" }}
      >
        <button
          onClick={handleClick}
          style={{ border: "none", borderRadius: "10px" }}
          className={`${
            badgeText == "Domestic" && "bg-success"
          } bg-none text-white px-3`}
        >
          {t("domestic")}
        </button>
        <button
          style={{ border: "none", borderRadius: "10px" }}
          onClick={handleClick}
          className={`${
            badgeText == "International" && "bg-success text-white"
          } bg-none text-dark px-3`}
        >
          {t("international")}
        </button>
      </div>
      <div>
        <h2 className="mb-3 fw-bold text-28">{t("delivery_calculator")}</h2>
        {/* <p className="text-lead mb-4">
            {t("get_delivery_charge_idea_before_shipment")}
          </p> */}
      </div>
      {/* <div>
        <a
          onClick={handleClick}
          className="badge bg-success px-3 py-2 cursor-pointer"
        >
          {badgeText}
        </a>
      </div> */}

      <div className="row w-50">
        <div className="col-12 col-lg-6">
          <label className="form-label fw-medium" htmlFor="weight">
            {t("percel_weight")} ({t("max_10_kg")})
          </label>
          <select
            id="weight"
            className="form-select"
            value={weight}
            onChange={handleInputChange(setWeight)}
          >
            <option value="">{t("enter_percel_weight")}</option>
            {deliveryCalculatorData.parcelWeights.map((w) => (
              <option key={w} value={w}>
                {w} {t("kg")}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-lg-6">
          <label className="form-label fw-medium" htmlFor="price">
            {t("product_sale_price")}
          </label>
          <input
            type="number"
            placeholder={t("enter_product_sale_price")}
            id="price"
            className="form-control"
            value={price}
            onChange={handleInputChange(setPrice)}
          />
        </div>
        <div className="col-12 col-lg-6 mt-3">
          <label className="form-label fw-medium" htmlFor="pickUpArea">
            {t("pick_up_area")}
          </label>
          <select id="pickUpArea" className="form-select" disabled>
            <option value="Dhaka">Dhaka</option>
          </select>
        </div>
        <div className="col-12 col-lg-6 mt-3">
          <label className="form-label fw-medium" htmlFor="deliveryArea">
            {t("delivery_area")}
          </label>
          <select
            name="deliveryArea"
            id="deliveryArea"
            className="form-select"
            value={deliveryArea}
            onChange={handleInputChange(setDeliveryArea)}
          >
            <option value="">{t("delivery_area_select")}</option>
            {deliveryCalculatorData.deliveryAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="btn btn-primary my-5"
        style={{ fontWeight: "500", fontSize: "19px" }}
        onClick={handleCalculate}
      >
        {deliveryCharge !== null
          ? `${deliveryCharge} ${t("taka")} ${
              zone == "SubDhaka" || zone == "OutsideDhaka"
                ? " + 1% COD"
                : " + 0 COD"
            }`
          : t("delivery_charge")}
      </button>
    </div>
  );
};

export default DomesticDeliveryCalculator;
