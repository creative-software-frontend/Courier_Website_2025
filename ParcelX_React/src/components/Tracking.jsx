/* 
 component tracking - index page
*/

import { useState } from "react";
import { useFrontendContext } from "../context/FrontendContext";
import SpinnerButton from "../components/my/SpinnerButton";

const Tracking = () => {
  const [trackId, setTrackId] = useState("");
  const { loader, getTrackingData, errorMessage } = useFrontendContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getTrackingData(trackId);
  };

  return (
    // tracking Section
    <section
      className={"section tracking"}
      style={{ paddingTop: "0px", marginTop: "-220px" }}
    >
      {/* tracking container */}
      <div
        className={"tracking__wrapper"}
        style={{ display: "grid", placeItems: "left" }}
      >
        {/* teacking content */}
        <div
          className={
            "tracking__text d-flex align-items center justify-content-between"
          }
        >
          <h4>TRACK YOUR CONSIGNMENT</h4>
          <span className="text-danger">{errorMessage && errorMessage}</span>
        </div>
        {/* tracking form wrapper*/}
        <div className={"form_wrapper"}>
          {/* tracking form */}
          <form onSubmit={handleSubmit} className={"tracking__form"}>
            {/* code input */}
            <div className="tracking_input_wrapper">
              <input
                type="text"
                placeholder="Enter Your Tracking ID"
                className={"tracking__code"}
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
              />
            </div>

            {/* submit button */}
            <button
              disabled={!trackId}
              className={`${!trackId && "cursor-disabled"} tracking__search`}
              type="submit"
              style={{ width: "auto" }}
            >
              {loader ? <SpinnerButton text={"Tracking..."} /> : "Track"}
            </button>
          </form>
        </div>
        {/* end tracking form wrapper*/}
      </div>
    </section>
    // end tracking section
  );
};

export default Tracking;
