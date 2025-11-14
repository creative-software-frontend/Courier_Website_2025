import { useFrontendContext } from "../context/FrontendContext";

const OrderDetails = () => {
  const { trackingData } = useFrontendContext();
  const {
    merchant,
    customer_name,
    customer_address,
    customer_phone,
    weight,
    collection,
    delivery,
    order_id,
  } = trackingData.data;
  return (
    <div className="row mt-5 order-details-wrapper">
      <div className="col-lg-12">
        <div className="card p-5 pb-4 w-100" style={{ maxWidth: "100%" }}>
          <div className="">
            <h4
              style={{ fontSize: "26px", fontWeight: "600" }}
              className="h1 mb-4"
            >
              Order Details&nbsp;
              <span style={{ fontSize: "22px", fontWeight: "normal" }}>
                ({order_id ? order_id : "order id n/a"})
              </span>
            </h4>
          </div>
          <table className="table table-bordered tracking_table">
            <thead>
              <tr>
                <th scope="col">Merchant Name</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {merchant}
                </th>
                <th scope="col">Customer Name</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {customer_name}
                </th>
              </tr>
              <tr>
                <th scope="col">Customer Address</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {customer_address}
                </th>
                <th scope="col">Customer Phone</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {customer_phone}
                </th>
              </tr>
              <tr>
                <th scope="col">Order Type</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  Regulary
                </th>
                <th scope="col">Weight</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {weight}
                </th>
              </tr>
              <tr>
                <th scope="col">Collection</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {collection}
                </th>
                <th scope="col">Delivery Charge</th>
                <th style={{ fontWeight: "normal" }} scope="col">
                  {delivery}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
