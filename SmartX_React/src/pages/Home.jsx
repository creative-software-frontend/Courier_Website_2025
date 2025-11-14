/* 
Main index page
*/

import Herosection from "../components/Herosection";
import Feature from "../components/Feature";
import Service from "../components/Service";
import Pricing from "../components/Pricing";
import Clients from "../components/Clients";
import Achievements from "../components/Achievement";
import Tracking from "../components/Tracking";
import Process from "../components/Process";
import courierPricing from "../db/olectra";

const HomePage = () => {
  const titles = courierPricing.reduce((acc, pricing) => {
    const pricingTitles = Object.keys(pricing);
    return acc.concat(pricingTitles);
  }, []);
  return (
    <div>
      {/* passing data as params to herosection components */}
      <Herosection title={"Timely and Effortless Parcel Delivery"} />
      <Tracking />
      <Process />
      <Feature />
      <Service />
      <Achievements />
      <Clients />
     <Pricing titles={titles} courierPricing={courierPricing} /> 
    </div>
  );
};

export default HomePage;
