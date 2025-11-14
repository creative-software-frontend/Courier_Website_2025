/* 
 component service - Home Page
*/

// font awesome icon from react-icons 5 for feature section
import {
  FaDropbox,
  FaHouseUser,
  FaTruckMoving,
  FaDiceD6,
  FaCity,
} from "react-icons/fa";

const Service = () => {
  return (
    <>
      {/* service section */}
      <section className={"service"}>
        {/* service heading */}
        <h2 className="section-heading">Our Services</h2>

        {/* services content container */}
        <div className={"service__section"}>
          {/* service wrapper */}
          <div className="container">
            {/* service row */}
            <div className="row">
              {/* service 1 */}
              <div className={"service__column"}>
                <div className={"service__card"}>
                  <div className={"icon-wrapper"}>
                    <i style={{ marginTop: "5px" }}>
                      <FaTruckMoving />
                    </i>
                  </div>
                  <h3>SAME DAY DELIVERY</h3>
                  <p>
                    Same day delivery is that we deliver product within 8 hours.
                    Merchant should have requested to avail same day delivery
                    service within 12 pm.
                  </p>
                </div>
              </div>
              {/* service 2 */}
              <div className={"service__column"}>
                <div className={"service__card"}>
                  <div className={"icon-wrapper"}>
                    <i style={{ marginTop: "5px" }}>
                      <FaDropbox />
                    </i>
                  </div>
                  <h3>NEXT DAY DELIVERY SERVICE</h3>
                  <p>
                    We ensure our merchant granted delivery within 24 hours. we
                    send SMS before the product is ready for dispatch. If
                    customer does not respond. our call center executives inform
                    the merchant rider is nearby customer’s location.
                  </p>
                </div>
              </div>
              {/* service 3 */}
              <div className={"service__column"}>
                <div className={"service__card"}>
                  <div className={"icon-wrapper"}>
                    <i style={{ marginTop: "5px" }}>
                      <FaCity />
                    </i>
                  </div>
                  <h3>SUB AREA AND OUTSIDE OF DHAKA</h3>
                  <p>
                    We are currently operating delivery service most of the sub
                    area of the Dhaka and we try to deliver within 48 hours
                    within this year we will start our operations all over
                    Bangladesh.
                  </p>
                </div>
              </div>
              {/* service 4 */}
              <div className={"service__column"}>
                <div className={"service__card"}>
                  <div className={"icon-wrapper"}>
                    <i style={{ marginTop: "5px" }}>
                      <FaDiceD6 />
                    </i>
                  </div>
                  <h3>PACKAGING</h3>
                  <p>
                    We offer you to keep your products safe and intact because
                    we have own Building our packaging ensures and insured
                    product safety.
                  </p>
                </div>
              </div>
              {/* service 4 */}
              <div className={"service__column"}>
                <div className={"service__card"}>
                  <div className={"icon-wrapper"}>
                    <i style={{ marginTop: "5px" }}>
                      <FaHouseUser />
                    </i>
                  </div>
                  <h3>WARE HOUSE</h3>
                  <p>
                    Three steps of payment method Hand Cash, Mobile Banking,
                    Bank Transfer.
                  </p>
                </div>
              </div>
            </div>
            {/* service row end */}
          </div>
          {/* end service wrapper */}
        </div>
        {/* end services content container */}
      </section>
      {/* end service section */}
    </>
  );
};

export default Service;
