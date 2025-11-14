import DeliveryCalculator from "../components/Home/DeliveryCalculator";
import HeroSlider from "../components/Home/HeroSlider";
import MerchantReview from "../components/Home/MerchantReview";
import WhyUs from "../components/Home/WhyUs";
import Faq from "../components/Home/Faq";
import Tracking from "../components/Tracking";
import AuthLink from "../components/Home/AuthLink";
import SpecialOffers from "../components/Home/SpecialOffers";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AuthLink />
      <Tracking />
      <SpecialOffers />
      <MerchantReview />
      <DeliveryCalculator />
      <Faq />
      <WhyUs />
    </>
  );
};

export default HomePage;
