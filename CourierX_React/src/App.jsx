// *************** Component CSS ******************
// import "./App.css";
// router components
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

// dropup site header & footer
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import TermPage from "./pages/TermPage";
import ReturnPage from "./pages/ReturnPage";
import LostPolicyPage from "./pages/LostPolicyPage";
import ExchangePolicyPage from "./pages/ExchangePolicyPage";
import LostPolicyBanglaPage from "./pages/LostPolicyBangla";
import { useTranslation } from "react-i18next";
import ExchangePolicyBanglaPage from "./pages/ExchangePolicyBanglaPage";
import ReturnPolicyBangla from "./pages/ReturnPolicyBanglaPage copy";
import TermsBanglaPage from "./pages/TermsBanglaPage";
import PolicyListingPage from "./pages/PolicyListingPage";
import TrackingPage from "./pages/Tracking";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy-listing" element={<PolicyListingPage />} />
        <Route path="/term" element={<TermPage />} />
        <Route path="/return" element={<ReturnPage />} />
        <Route path="/lost-policy" element={<LostPolicyPage />} />
        <Route path="/exchange-policy" element={<ExchangePolicyPage />} />
        <Route
          path="/exchange-policy-bangla"
          element={<ExchangePolicyBanglaPage />}
        />
        <Route path="/lost-policy-bangla" element={<LostPolicyBanglaPage />} />
        <Route path="/return-policy-bangla" element={<ReturnPolicyBangla />} />
        <Route path="/term-bangla" element={<TermsBanglaPage />} />

        {/* <Route path="/price" element={<PricingPage />} /> */}
        {/* <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/tracking/:id" element={<TrackingPage />} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
