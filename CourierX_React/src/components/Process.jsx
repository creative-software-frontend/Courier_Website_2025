import { BsFillLightningFill, BsFillFileLock2Fill } from "react-icons/bs";

// bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// font awesome icon from react-icons 5 for feature section
import { FaTruckMoving } from "react-icons/fa";

const Process = () => {
  return (
    <>
      {/* feature section */}
      <section className={"feature process"} style={{ marginTop: "80px" }}>
        {/* feature heading */}
        <h2 className="section-heading">Three Step Processing</h2>

        <div id="pricing" className="pricing">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-4 process-col">
                <div className="box d-flex gap-4">
                  <div className="mt-3">
                    <FaTruckMoving
                      className="text-courier-primary mr-3"
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 h2">RECEIVE FROM SHIPPER</h3>

                    <p className="mb-4">
                      We collect the product from the shipper/merchant’s ware
                      house/location offer requesting for pickup.
                    </p>
                    <div>
                      <a className="buy-btn">Step 01</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 process-col">
                <div className="box d-flex gap-4">
                  <div className="mt-3">
                    <BsFillFileLock2Fill
                      className="text-courier-primary mr-3"
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 h2">SAFE & SECURE SHIPMENT</h3>

                    <p>
                      After confirming the pickup, rider receives the products
                      from merchant’s location and safely bring the parcel to
                      our near hub.
                    </p>
                    <div className="mt-4">
                      <a className="buy-btn">Step 02</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 process-col">
                <div className="box d-flex gap-4">
                  <div className="mt-3">
                    <BsFillLightningFill
                      className="text-courier-primary mr-3"
                      style={{ fontSize: "40px" }}
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 h2">FASTEST DELIVER TO RECEIVER</h3>

                    <p>
                      As our delivery commitment we have handover parcel to the
                      customer safely and swiftly on their desired time.
                    </p>
                    <div className="mt-4">
                      <a className="buy-btn">Step 03</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
    </>
  );
};

export default Process;
