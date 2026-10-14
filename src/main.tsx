import React from "react";
import { useLocale } from "./lib/i18n";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

function LocaleRoot() {
  useLocale();
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleRoot />
  </React.StrictMode>
);
