import Pricing from "../components/Pricing";
import courierPricing from "../db/olectra";
const PricingPage = () => {
  const titles = courierPricing.reduce((acc, pricing) => {
    const pricingTitles = Object.keys(pricing);
    return acc.concat(pricingTitles);
  }, []);
  return (
    <div style={{ marginTop: "60px" }}>
      <Pricing titles={titles} courierPricing={courierPricing} />
    </div>
  );
};

export default PricingPage;
