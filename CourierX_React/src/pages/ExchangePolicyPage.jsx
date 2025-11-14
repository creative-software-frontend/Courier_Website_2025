import { Link } from "react-router-dom";

const ExchangePolicyPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <div className="d-flex justify-content-between">
            <h2>Exchange Policy</h2>
            <Link
              to="/exchange-policy-bangla"
              className="badge bg-success link text-white py-2"
              style={{ fontSize: "16px", fontWeight: "500", height: "35px" }}
            >
              Exchange Policy in Bangla
            </Link>
          </div>
          <p>
            <b>1.</b> When a Delivery attempt is made by the Delivery Agent and
            the Customer is willing to receive the Deliverables partially with
            the consent of the Service Requester it will be deemed to be a
            Partial Delivery, and the rest of the parcel will be deemed to be an
            exchange parcel.
          </p>
          <p>
            <b>2.</b> In case of any such Partial Delivery, the Package will be
            returned to the Service Requester within approximately the same
            timeline as the initial product journey from pick-up to delivery
            attempt and the Service Requester shall be liable to pay Partial
            Delivery as well as Exchange Service Fee to CourierX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExchangePolicyPage;
