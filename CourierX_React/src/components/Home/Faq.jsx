import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <h2 className="text-center fw-bold">{t("faq")}</h2>
      <div class="accordion my-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {t("CourierX_merchant")}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p className="mb-0">
                To become a CourierX merchant, complete the online registration
                process by visiting &nbsp;{" "}
                <a
                  className="text-primary my-2"
                  href="https://system.CourierX.com/merchant-registration"
                  target="_blank"
                >
                  Merchant Registration Link
                </a>
                . You will need to provide the following details:
              </p>

              <ul>
                <li>Name of the business</li>
                <li>Name of the company’s owner</li>
                <li>Mobile number</li>
                <li>Email Address</li>
              </ul>
              <p>
                After providing all the required information, click on the “Sign
                Up” option. You will receive an SMS on your registered phone
                number with your login ID, password, and merchant panel link.
              </p>
              <p>
                Once you log in to the merchant panel, follow these two steps:
              </p>
              <p>1. Provide Online Store Information:</p>
              <ul>
                <li>Store name </li>
                <li>Phone number </li>
                <li>Name of the contact person</li>
                <li>Address</li>
              </ul>
              <p>2. Provide Payment Information:</p>
              <ul>
                <li>Bank account details (savings or current account)</li>
                <li>
                  Bkash account details (only personal Bkash accounts are
                  accepted)
                </li>
              </ul>
              <p>
                After completing these steps, you can request a new parcel
                pickup using our courier service.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {t("instant_payment")}
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Instant payment is a special service that allows you to receive
                your payment immediately after the rider places the order to
                your customer. With this service, there's no need to wait 2 or 3
                days to get your money in hand.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {t("return_charges")}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                CourierX operates hubs in Dhaka, Chittagong, and Khulna. You can
                send and pick up parcels from any of these districts.
              </p>
              <ul>
                <li>
                  <b>Dhaka to Dhaka City:</b> Parcel Return Charge: 60 BDT, COD:
                  0%
                </li>
                <li>
                  <b>Dhaka to Dhaka Sub City:</b> Parcel Return Charge: 100 BDT,
                  COD: 1%
                </li>
                <li>
                  <b>Khulna to Khulna City:</b> Parcel Return Charge: 50 BDT,
                  COD: 0%
                </li>
                <li>
                  <b>Khulna to Khulna Sub City:</b> Parcel Return Charge: 100
                  BDT, COD: 1%
                </li>
                <li>
                  <b>Chittagong to Chittagong City:</b> Parcel Return Charge: 60
                  BDT, COD: 0%
                </li>
                <li>
                  <b>Chittagong to Chittagong Sub City:</b> Parcel Return
                  Charge: 100 BDT, COD: 1%
                </li>
                <li>
                  <b>Outside City Delivery</b> Parcel Return Charge: 120 BDT,
                  COD: 1%
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              {t("track_percel")}
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                CourierX delivery service enables you to live track your parcel
                anytime you want. Your courier parcel can be tracked anytime
                using the CourierX merchant app. Open the CourierX app and go to the
                Order details {">"} Tracking. From there, you can track the
                current location of the particular parcel with the tracking ID
                and your phone number. However, only parcels requested using
                your CourierX user account’s registered phone number can be tracked
                using this option.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              {t("CourierX_delivery")}
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                CourierX Delivery Service delivers parcels in 64 districts all over
                the country. CourierX operates hubs in Dhaka, Chittagong, and
                Khulna. You can send and pick up parcels from any of these
                districts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
