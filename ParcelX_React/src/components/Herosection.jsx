import { Link } from "react-router-dom";

const Herosection = ({ title }) => {
  return (
    <main className={"main_section"}>
      <div className={"container hero-section"}>
        <div className={"grid_two_section"}>
          <div className={"hero_content"}>
            <h1>{title}</h1>
            <p style={{ paddingRight: "20px" }}>
              Effortlessly monitor your courier and receive it within hours for
              efficient and secure delivery
            </p>
            <a
              href="https://system.ParcelX.com/merchant-registration"
              target="_blank"
            >
              <button style={{ height: "50px" }}>Become a Merchant</button>
            </a>
          </div>
          {/* width & height must needed for Image tag */}
          <div className={"hero_image"}>
            <img
              src="/hero-ecourier.png"
              alt="Hero Image"
              style={{
                height: "600px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      {/* Wave Effect For Hero Section */}
      <div className={"custom-shape-divider-bottom-1693893636"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={"shape-fill"}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
