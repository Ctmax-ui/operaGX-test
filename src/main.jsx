import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { YoutubeVideoModalContext } from "./context/YoutubeVideoModalContext.jsx";
import { SiteThemeContext } from "./context/SiteThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <YoutubeVideoModalContext>
        <SiteThemeContext>
          <App />
        </SiteThemeContext>
      </YoutubeVideoModalContext>
    </BrowserRouter>
  </StrictMode>
);
