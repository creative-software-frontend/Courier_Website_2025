/* 
 component branches - contact page
*/

// react icons for branch card
import { FaMapMarkerAlt } from "react-icons/fa";

const Branches = () => {
  return (
    <>
      {/* branch section */}
      <section className={"branches"}>
        {/* branches wrapper */}
        <div className="main__wrapper grid grid-3">
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Central
            </h1>
            <p className={"address"}>
             Rampura, Dhaka  </p>
            <p className={"email"}>info@tltd.com</p>
            <p className={"mobile"}>0140118</p>
          </div>
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Mirpur
            </h1>
            <p className={"address"}>
            Section-10, Mirpur,Dhaka            </p>
            <p className={"email"}>info@ltd.com</p>
            <p className={"mobile"}>0147569</p>
          </div>
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Kamrangir Chor
            </h1>
            <p className={"address"}>
         Kamrangir Chor,Dhaka
      </p>
            <p className={"email"}>info@tltd.com</p>
            <p className={"mobile"}>014077571</p>
          </div>
      
          
        </div>
        {/* end branches wrapper */}
      </section>
      {/* end branch section */}
    </>
  );
};

export default Branches;
