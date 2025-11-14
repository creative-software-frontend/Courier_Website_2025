import { Link } from "react-router-dom";

const ReturnPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <div className="d-flex justify-content-between">
            <h2>Return Policy</h2>
            <Link
              to="/return-policy-bangla"
              className="badge bg-success link text-white py-2"
              style={{ fontSize: "16px", fontWeight: "500", height: "35px" }}
            >
              Return Policy in Bangla
            </Link>
          </div>
          <p>Return of Deliverables Due to Failed/Cancelled Delivery </p>
          <p>
            <b>1.</b>
          </p>
          <p>
            When a Delivery attempt is made by the Delivery Agent and the
            Customer is unwilling or declines to receive the Deliverables as it
            is or it is found that the contact information of the Customer given
            in the Service Request is wrong or the Customer remains unavailable
            after various attempts by the Delivery Agent or the Order is
            canceled by the Service Requester or Customer at a stage when the
            Delivery Agent is already on the way to the Drop-off Location, it
            will be deemed to be a Failed/Canceled Delivery.
          </p>
          <p>
            <b>2.</b>{" "}
          </p>
          <p>
            In case of any such Failed/Canceled delivery, the Package will be
            returned to the Service Requester within approximately the same
            timeline as the initial product journey from pick-up to delivery
            attempt and the Service Requester shall be liable to pay Delivery as
            well as Return Service Fee to CourierX.
          </p>
          <p>
            <b>3.</b>
          </p>
          <p>
            Since Packaging offered by the Merchant at the time of product
            handover to the Delivery Agent of CourierX usually covers only one
            delivery attempt journey to the Customer, multiple delivery attempts
            due to unavailability of the Customer or a return journey as a
            result of Failed Delivery may create additional stress to the
            product Packaging in the normal course of business. CourierX shall
            ensure packages are handled with care at all times but will not
            guarantee against nor be liable for any wear and tear as a result of
            poor Packaging by the Merchant or multiple delivery attempts to
            cater to the Customer’s needs or return of the product to the
            Merchant as a result of Failed Delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnPage;
