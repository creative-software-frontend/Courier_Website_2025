import React from "react";
import { useFrontendContext } from "../context/FrontendContext";

const OrderTracking = () => {
  const { trackingData } = useFrontendContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return { formattedDate, formattedTime };
  };

  // Sort order history based on date (assuming order.date is a valid date string)
  const sortedOrderHistory = trackingData.order_history.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Sort in descending order
  });

  return (
    <>
      <div class="row text order-main-track">
        <h3
          style={{ fontSize: "28px", fontWeight: "600" }}
          className="mt-5 ms-5"
        >
          Order Tracking
        </h3>
      </div>

      <div class="history-tl-container">
        <ul class="tl">
          {sortedOrderHistory.map((order) => {
            const { formattedDate, formattedTime } = formatDate(order.date);
            return (
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="timestamp">
                  {formattedDate}
                  <br />
                  {formattedTime}
                </div>
                <div style={{ fontSize: "18px" }} class="item-title">
                  {" "}
                  {order.status}
                </div>

                <div style={{ fontSize: "13px" }} class="item-detail">
                  {order.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default OrderTracking;
