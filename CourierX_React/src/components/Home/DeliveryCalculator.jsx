import DomesticDeliveryCalculator from "../Home/DomesticDeliveryCalculator";
import InternationalDeliveryCalculator from "../Home/InternationalDeliveryCalculator";
import { useFrontendContext } from "../../context/FrontendContext";

const DeliveryCalculator = () => {
  const { badgeText } = useFrontendContext();

  return (
    <div className="container my-5 delivery_calculator">
      {badgeText == "Domestic" ? (
        <DomesticDeliveryCalculator />
      ) : (
        <InternationalDeliveryCalculator />
      )}
    </div>
  );
};

export default DeliveryCalculator;
