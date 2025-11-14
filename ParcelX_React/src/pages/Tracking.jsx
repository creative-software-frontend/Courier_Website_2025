import Spinner from "../components/my/Spinner";
import { useFrontendContext } from "../context/FrontendContext";
import { FaHome } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import OrderDetails from "../components/OrderDetails";
import OrderTracking from "../components/OrderTracking";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const TrackingPage = () => {
  const { loader, trackingData, getTrackingData } = useFrontendContext();

  const { id } = useParams();

  useEffect(() => {
    getTrackingData(id);
  }, [id]);

  // console.log(trackingData);
  return (
    <>
      {loader && <Spinner />}
      {!loader && trackingData.company && (
        <div className="wrapper tracking_page">
          <div className="row mt-5 tracking_company_info_wrapper">
            <div className="col-lg-12">
              <div className="card p-5 pb-4 w-100" style={{ maxWidth: "100%" }}>
                <div className="tracking_company_info d-flex justify-content-between align-items-center">
                  <div className="tracking_title_address">
                    <h1
                      style={{ fontSize: "42px" }}
                      className="h1 fw-bold mb-0"
                    >
                      {trackingData.company.name}
                    </h1>
                    <span className="text-courier-primary">
                      {trackingData.company.title}
                    </span>
                    <p
                      className="mt-3 tracking-address d-flex align-items-center gap-2"
                      style={{ fontSize: "18px" }}
                    >
                      <FaHome className="mr-2" /> {trackingData.company.address}
                    </p>
                  </div>
                  <div className="tracking_comapny_logo_wrapper">
                    <img
                      src={
                        "https://system.ParcelX.com/" +
                        trackingData.company.logo
                      }
                      alt=""
                      style={{ height: "100px", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="tracking_social d-flex justify-content-center align-items-center mt-4 gap-5">
                  <div className="d-flex align-items-center mr-5">
                    <span className="icon-circle-bg mr-2">
                      <FaMobileButton />
                    </span>
                    <span style={{ fontSize: "20px" }}>
                      {trackingData.company.mobile}
                    </span>
                  </div>
                  <div className="d-flex align-items-center mr-5">
                    <span className="icon-circle-bg mr-2">
                      <MdEmail />
                    </span>
                    <span style={{ fontSize: "20px" }}>
                      {trackingData.company.email}
                    </span>
                  </div>
                  <div className="d-flex align-items-center mr-5">
                    <span className="icon-circle-bg mr-2">
                      <FaGlobe />
                    </span>
                    <span style={{ fontSize: "20px" }}>
                      {trackingData.company.website}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OrderDetails />
          <OrderTracking />
        </div>
      )}
    </>
  );
};

export default TrackingPage;
