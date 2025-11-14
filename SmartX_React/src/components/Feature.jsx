// font awesome icon from react-icons 5 for feature section
import {
  FaTruck,
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaClock,
  FaHeadset,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Feature = () => {
  return (
    <>
      {/* feature section */}
      <section className={"feature"} style={{ marginTop: "80px" }}>
        {/* feature heading */}
        <h2 className="section-heading">Our Features</h2>
        {/* accordion wrapper */}
        <div className={"accordion-wrapper"}>
          {/* features wrapper */}
          <div className={"accordion__container grid grid-3"}>
            {/* feature 1 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check1"
              />
              <label className="accordion-label" htmlFor="check1">
                <span>
                  <i>
                    <FaTruck />
                  </i>{" "}
                  DAILY PICK UP NO LIMITATION
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                SmartX gives you the opportunity of unlimited pickup.
                  You can give any amount of parcels regardless of their size
                  and weight. Also you don’t have to bring your parcels to our
                  office! Our trusted pickup man will visit your location and
                  pick up your parcels on behalf of you. You can request for
                  pickup for every day of the week.
                </p>
              </div>
            </div>
            {/* feature 2 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check2"
              />
              <label className={"accordion-label"} htmlFor="check2">
                <span>
                  <i>
                    <FaGlobeAmericas />
                  </i>{" "}
                  ONLINE MANAGEMENT
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                  With our simple and easy to use user interface you can get all
                  the information you need in your own user dashboard. You can
                  view your user dashboard to stay updated. Whether it’s about a
                  parcel or payment, you can get all of your information with
                  just simple clicks.
                </p>
              </div>
            </div>
            {/* feature 3 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check3"
              />
              <label className={"accordion-label"} htmlFor="check3">
                <span>
                  <i>
                    <FaMoneyBillWave />
                  </i>{" "}
                  CASH ON DELIVERY
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                  With our simple and easy to use user interface you can get all
                  the information you need in your own user dashboard. You can
                  view your user dashboard to stay updated. Whether it’s about a
                  parcel or payment, you can get all of your information with
                  just simple clicks.
                </p>
              </div>
            </div>
            {/* feature 4 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check4"
              />
              <label className={"accordion-label"} htmlFor="check4">
                <span>
                  <i>
                    <FaClock />
                  </i>{" "}
                  REAL TIME TRACKING
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                SmartX provides an unique tracking code for your
                  every consignments. Through our website app you can learn the
                  current status of the products and stay up to date.
                </p>
              </div>
            </div>
            {/* feature 5 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check5"
              />
              <label className={"accordion-label"} htmlFor="check5">
                <span>
                  <i>
                    <FaHeadset />
                  </i>{" "}
                  FASTER PAYMENT SERVICE
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                  At SmartX you can request for your payment every
                  seven days of the week. We Courier provides multiple payment
                  methods such as cash, Bkash or Rocket and all mobile banking
                  payment. Also you can collect money simply by transferring
                  your current balance to your preferred Bank. Our faster and
                  secure payment service will provide the ultimate solution to
                  your payment problem which can occur using a logistics
                  service.
                </p>
              </div>
            </div>
            {/* feature 6 */}
            <div className={"accordion"}>
              <input
                className={"feature__input"}
                type="radio"
                name="radio-a"
                id="check6"
              />
              <label className={"accordion-label"} htmlFor="check6">
                <span>
                  <i>
                    {" "}
                    <FaMoneyBillAlt />
                  </i>{" "}
                  ADVANCE COUSTOMER SERVICE
                </span>
              </label>
              <div className={"accordion-content"}>
                <p>
                  Our Call Center Executives are always ready 24/7 to help you
                  with your problems. They are fast, well trained, reliable and
                  always ready to solve your problems. Also you can contact us
                  on our Facebook page and whatsapp as well. Our Facebook page
                  admins are always active to give you feedbacks.
                </p>
              </div>
            </div>
          </div>
          {/* end features wrapper */}
        </div>
        {/* end accordion wrapper wrapper */}
      </section>
      {/* end section */}
    </>
  );
};

export default Feature;
