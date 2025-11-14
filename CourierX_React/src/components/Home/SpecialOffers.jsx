import React from "react";
import { useTranslation } from "react-i18next";

const SpecialOffers = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">{t("special_offers")}</h2>
      <div className="my-3">
        <div className="row offers">
          <div className="col-md-4">
            <div className="card align-items-center">
              <div>
                <i class="bi bi-camera-fill"></i>
              </div>
              <p className="text-center mb-0">
                {t("free_product_photography_offer")}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card align-items-center">
              <div>
                <i class="bi bi-laptop-fill"></i>
              </div>
              <p className="text-center mb-0">
                {t("free_digital_marketing_offer")}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card align-items-center">
              <div>
                <i class="bi bi-box-seam"></i>
              </div>
              <p className="text-center mb-0">
                {t("sell_products_on_our_ecommerce_platform")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
