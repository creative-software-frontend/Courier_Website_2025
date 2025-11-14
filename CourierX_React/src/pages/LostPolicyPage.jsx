import React from "react";
import { Link } from "react-router-dom";

const LostPolicyPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <div className="d-flex justify-content-between">
            <h2>Lost Damaged Policy</h2>
            <Link
              to="/lost-policy-bangla"
              className="badge bg-success link text-white py-2"
              style={{ fontSize: "16px", fontWeight: "500", height: "35px" }}
            >
              Lost Damaged Policy Bangla
            </Link>
          </div>
          <p>
            <b>1.</b> In case of any damage or loss of the Deliverables/Package
            due to negligence of the Delivery Agent and where the liabilities of
            CourierX  are established, CourierX  will be liable to compensate the Service
            Requester.
          </p>
          <p>
            <b>2.</b> CourierX  reserves the right not to provide any compensation on
            incidents where any terms and conditions which were agreed upon by
            the Service Requester are violated or deemed to be violated.
          </p>
          <p>
            <b>3.</b> CourierX  reserves the right not to provide any compensation
            for incidents as a result of poor Packaging. (Since Packaging is
            offered by the Service Requester)
          </p>
          <p>
            <b>4.</b> CourierX  reserves the right not to provide any compensation
            for incidents where the Service Requester did not write proper
            details or is not clear or incorrect on the package.
          </p>
          <p>
            <b>5.</b> CourierX  reserves the right not to provide any compensation
            for incidents where the Service Requester did not enter the details
            of the parcel at the Merchant Pannel website/application.
          </p>
          <p>
            <b>6.</b> CourierX  reserves the right not to provide any compensation
            for incidents where the Service Requester enters incorrect details
            of the Consumer at the Merchant Pannel website/application.
          </p>
          <p>
            <b>7.</b> The compensation amount will be determined upon mutual
            discussion between the Parties and will not exceed the invoice value
            or standard market price of the damaged or lost Deliverables or BDT
            10,000 (ten thousand), whichever is lower. CourierX's total liability to
            any Service Requester in respect of all losses incurred in
            connection with this Agreement, whether in contract, tort (including
            negligence, breach of statutory or other duty) or otherwise shall in
            no circumstances exceed the value of the Package or BDT 10,000 (ten
            thousand), whichever is lower.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LostPolicyPage;
