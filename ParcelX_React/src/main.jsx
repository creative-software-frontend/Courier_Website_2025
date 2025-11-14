import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// css files for client carousel slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// css files for dropup
import "./assets/globals.css";
import "./assets/contact.css";
import "./assets/auth.css";
import "./responsive.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// router config
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import { FrontendProvider } from "./context/FrontendContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FrontendProvider>
        <App />
      </FrontendProvider>
    </Router>
  </React.StrictMode>
);
