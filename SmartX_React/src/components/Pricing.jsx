// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
/* 
 component pricing - Home Page
*/

const Pricing = ({ titles, courierPricing }) => {
  return (
    <>
      {/* pricing section */}
      <section className={"section wrapper calculate-charge"}>
        {/* price heading */}
        <h2 className="section-heading price-heading mb-4 mx-auto pl-0">
          Pricing
        </h2>

        <div className="d-flex justify-content-center">
          <ul
            className="nav nav-pills mb-5 mt-5 ml-5"
            id="pills-tab"
            role="tablist"
          >
            {titles.map((title, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link${index === 0 ? " active" : ""}`}
                  id={`pills-${title.toLowerCase().replace(/\s/g, "-")}-tab`}
                  data-toggle="pill"
                  href={`#pills-${title.toLowerCase().replace(/\s/g, "-")}`}
                  role="tab"
                  aria-controls={`pills-${title
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="tab-content mx-auto"
          id="pills-tabContent"
          style={{ height: "200px" }}
        >
          {courierPricing.map((title, index) => (
            <div
              key={index}
              className={`text-center mx-auto tab-pane fade${
                index === 0 ? " show active" : ""
              }`}
              id={`pills-${titles[index].toLowerCase().replace(/\s/g, "-")}`}
              role="tabpanel"
              aria-labelledby={`pills-${titles[index]
                .toLowerCase()
                .replace(/\s/g, "-")}-tab`}
            >
              {title[titles[index]].map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="card mr-4 text-center p-3 px-4 float-left mb-4"
                >
                  <div>
                    <p>{item.name}</p>
                    <h2>{item.price}</h2>
                  </div>
                  {/* <span style={{ color: "red" }} className="text-danger">
                    {item.name} = {item.price}
                  </span> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
