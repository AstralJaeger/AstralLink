import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { siteConfig } from "./site.config.ts";
import { applyTheme } from "./theme.ts";

// Apply per-instance configuration (colors + tab title) before first render.
applyTheme(siteConfig.theme);
document.title = siteConfig.meta.title;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
