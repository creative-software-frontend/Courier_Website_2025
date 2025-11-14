import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FrontendContext = createContext({});

export const FrontendProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [trackingData, setTrackingData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Function to get tracking data and store it in localStorage
  const getTrackingData = async (trackingId) => {
    setLoader(true);
    try {
      const { data } = await axios.get(
        `https://system.ParcelX.com/api/gee?tracking_id=${trackingId}`
      );
      setTrackingData(data);
      localStorage.setItem("trackingData", JSON.stringify(data)); // Store in localStorage
      navigate("/tracking/" + trackingId);
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      // Handle errors here
      if (error.response.status == 500) {
        setErrorMessage("Your tracking id is invalid");
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
      }
      console.error("Error fetching tracking data:", error.response.status);
    }
    setLoader(false);
  };
  // Load trackingData from localStorage on component mount or page refresh
  useEffect(() => {
    const storedTrackingData = localStorage.getItem("trackingData");
    if (storedTrackingData) {
      setTrackingData(JSON.parse(storedTrackingData));
    }

    // Fetch updated tracking data when trackingId changes
    // if (trackingId) {
    //   getTrackingData(trackingId);
    // }
  }, []); // Add trackingId as a dependency
  return (
    <FrontendContext.Provider
      value={{
        trackingData,
        getTrackingData,
        loader,
        errorMessage,
      }}
    >
      {children}
    </FrontendContext.Provider>
  );
};
export function useFrontendContext() {
  return useContext(FrontendContext);
}
