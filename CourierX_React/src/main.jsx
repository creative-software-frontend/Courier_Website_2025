import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./my_style.css";
import "./i18n";

// css files for dropup

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
