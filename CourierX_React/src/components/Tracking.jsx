/* 
 component tracking - index page
*/

import { useState } from "react";
import { useFrontendContext } from "../context/FrontendContext";
import SpinnerButton from "../components/my/SpinnerButton";
import { useTranslation } from "react-i18next";

const Tracking = () => {
  const { t, i18n } = useTranslation();

  const [trackId, setTrackId] = useState("");
  const { loader, getTrackingData, errorMessage } = useFrontendContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getTrackingData(trackId);
  };

  return (
    // tracking Section
    <section className={"section tracking"} style={{ paddingTop: "0px" }}>
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
          <h4>{t("track_your_consignment")}</h4>
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
                placeholder={t("enter_your_tracking_id")}
                className={"tracking__code"}
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
              />
            </div>

            {/* submit button */}
            <button
              disabled={!trackId}
              className={`${
                !trackId && "cursor-disabled"
              } tracking__search btn btn-success`}
              type="submit"
              style={{ height: "40px" }}
            >
              {loader ? <SpinnerButton text={"Tracking..."} /> : t("track")}
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
