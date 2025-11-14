import { Link } from "react-router-dom";

const PolicyListingPage = () => {
  return (
    <section className="About section" style={{ marginTop: "50px" }}>
      <div className="wrapper container">
        <div className="about">
          <div className="d-flex flex-column align-items-center">
            <Link
              className="text-dark text-decoration-none fw-medium"
              to="/term"
              style={{ fontSize: "24px" }}
            >
              Terms and Condition
            </Link>
            <Link
              className="text-dark text-decoration-none fw-medium"
              to="/return"
              style={{ fontSize: "24px" }}
            >
              Return Policy
            </Link>
            <Link
              className="text-dark text-decoration-none fw-medium"
              to="/lost-policy"
              style={{ fontSize: "24px" }}
            >
              Lost or Return Policy
            </Link>
            <Link
              className="text-dark text-decoration-none fw-medium"
              to="/exchange-policy"
              style={{ fontSize: "24px" }}
            >
              Exchange Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyListingPage;
