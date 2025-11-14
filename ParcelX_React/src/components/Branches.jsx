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
              Road-3, House-19, Block-B,  Dhaka  </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>01401</p>
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
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>01401</p>
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
        Rony Merket, Kamrangir Chor,Dhaka
      </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>0140117</p>
          </div>
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              New Market
            </h1>
            <p className={"".address}>
            New Super Market, Kachabazar,New Market, Dhaka
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>01401</p>
          </div>
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Uttara
            </h1>
            <p className={"address"}>
            Sector-10, Uttara, Dhaka            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>01403</p>
          </div>
          {/* single branch */}
          <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Jatrabari
            </h1>
            <p className={"".address}>
            Shahid Faruk Iqbal Road, Jatrabari, Dhaka
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>014011</p>
          </div>
          {/* end single branch */}

           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Chittagonj
            </h1>
            <p className={"".address}>
            Katalgonj Road, Panchlaish,Chattogram

            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>014011</p>
          </div>
          {/* end single branch */}
           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Sylhet
            </h1>
            <p className={"".address}>
            Zindabazar, Sylhet
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>014011</p>
          </div>
          {/* end single branch */}
           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Mymensingh
            </h1>
            <p className={"".address}>
            Charpara Road, Mymensingh
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>014011</p>
          </div>
          {/* end single branch */}
           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Barishal
            </h1>
            <p className={"".address}>
            Notullabad, Barishal
            </p>
            <p className={"email"}>info@parcelpointltd.com</p>
            <p className={"mobile"}>01401177564</p>
          </div>
          {/* end single branch */}
           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Bogura
            </h1>
            <p className={"".address}>
            College Road,Bogura
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>0140</p>
          </div>
          {/* end single branch */}
           {/* single branch */}
           <div className={"branch"}>
            <h1 className={"name"}>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Khulna
            </h1>
            <p className={"".address}>
            Khan A Sabur Road, Khulna
            </p>
            <p className={"email"}>info@ParcelX.com</p>
            <p className={"mobile"}>0140</p>
          </div>
          {/* end single branch */}
          
        </div>
        {/* end branches wrapper */}
      </section>
      {/* end branch section */}
    </>
  );
};

export default Branches;
