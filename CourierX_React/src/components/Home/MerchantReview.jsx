import { useTranslation } from "react-i18next";
import SectionTitle from "../Common/SectionTitle";
import ReviewItem from "./ReviewItem";
const MerchantReview = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <SectionTitle value={t("merchant_review")} />
      <div className="container">
        <div className="row">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
    </div>
  );
};

export default MerchantReview;
