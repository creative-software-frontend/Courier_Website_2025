// *************** Component CSS ******************
import "./App.css";
// router components
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

// dropup site header & footer
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ServiceArea from "./pages/ServiceArea";
import ContactPage from "./pages/Contact";
import PricingPage from "./pages/Pricing";
import RegisterPage from "./pages/Register";
import AuthPage from "./pages/Auth";
import AboutPage from "./pages/About";
import TrackingPage from "./pages/Tracking";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/tracking/:id" element={<TrackingPage />} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
