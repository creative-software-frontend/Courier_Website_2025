/* 
 service area - page
*/
// style is from service area (same) directory
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosPublic, { axiosOnly } from "../api/axiosPublic";
import axios from "axios";
import Spinner from "../components/my/Spinner";

// link component is for routing

const ServiceArea = () => {
  const [serviceAreaList, setServiceAreaList] = useState([]);
  const [coverageAreaList, setCoverageAreaList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [loader, setLoader] = useState(false);

  const getDistricts = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get(
        "https://system.CourierX.com/api/distList"
      );
      // Sorting data based on the 'name' property alphabetically
      const isDisrict = true;
      const sortedDataAlphabetically = sortDataAlphabetically(
        data.data,
        isDisrict
      );
      setServiceAreaList(sortedDataAlphabetically);
      setSelectedDistrict("");
      setLoader(false);
      setCoverageAreaList([]);
      // Handle the retrieved data as needed
    } catch (error) {
      // Handle errors if the request fails
      console.error("Error fetching service area list:", error);
    }
  };

  const getCoverageArea = async (id) => {
    try {
      setLoader(true);
      const { data } = await axios.get(
        "https://system.CourierX.com/api/dist-area?id=" + id
      );
      // Sorting data based on the 'name' property alphabetically
      const sortedDataAlphabetically = sortDataAlphabetically(data.data);
      setCoverageAreaList(sortedDataAlphabetically);

      // Extracting districts from the array of objects
      const districts = data.data.map((item) => item.district);

      // Assuming you're using React useState hook

      setSelectedDistrict(districts[0]); // Set the first district as an example

      setServiceAreaList([]);
      setLoader(false);
      // Handle the retrieved data as needed
    } catch (error) {
      // Handle errors if the request fails
      console.error("Error fetching service area list:", error);
    }
  };

  const sortDataAlphabetically = (allData, isDisrict) => {
    const sortedData =
      allData &&
      allData.sort((a, b) => {
        if (isDisrict) {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          const nameA = a.area.toLowerCase();
          const nameB = b.area.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
      });
    return sortedData;
  };

  useEffect(() => {
    getDistricts();
  }, []);

  return (
    <>
      {/* section service area */}
      <section className={"coverage-area"}>
        {/* wrapper for service area content */}
        <div className="main__wrapper">
          {/* service area heading */}
          <h2 className="section-heading">Coverage Area</h2>
          {/* breadcrumbs & search */}
          <div className={"breadcrumbs_search_wrapper"}>
            <nav className={"breadcrumbs"}>
              <Link to="/" className={"breadcrumbs__item"}>
                Home
              </Link>
              <a
                onClick={() => getDistricts()}
                className={"breadcrumbs__item"}
                style={{ cursor: "pointer" }}
              >
                Districts
              </a>
              {coverageAreaList.length > 0 && (
                <a to="#" className={"breadcrumbs__item"}>
                  Subareas
                </a>
              )}
            </nav>
            {/* <form className={"form__nosubmit"}>
              <input
                className={"input__nosubmit search__icon"}
                type="search"
                placeholder="Search..."
              />
            </form> */}
          </div>
          {/* api data for divsions */}
          <div className={"list"}>
            <h2>
              {selectedDistrict ? selectedDistrict + " Area" : "All Districts"}
            </h2>
            <>
              {loader ? (
                <Spinner />
              ) : (
                <ul>
                  {serviceAreaList &&
                    serviceAreaList.map((item) => (
                      <li
                        onClick={() => getCoverageArea(item.id)}
                        key={item.id}
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                  {coverageAreaList && coverageAreaList.length > 0 ? (
                    coverageAreaList.map((coverage) => (
                      <li key={coverage.id} style={{ cursor: "auto" }}>
                        <span>{coverage.area}</span>
                      </li>
                    ))
                  ) : (
                    <li>
                      <span>No Coverage Area Found</span>
                    </li>
                  )}
                </ul>
              )}
            </>
          </div>
        </div>
        {/* end wrapper for service area content */}
      </section>
      {/* end section service area */}
    </>
  );
};

export default ServiceArea;
