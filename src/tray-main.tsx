import React from "react";
import { useLocale } from "./lib/i18n";
import ReactDOM from "react-dom/client";
import TrayMenu from "./TrayMenu";
import { syncThemeFromStorage } from "./lib/theme";
import "./App.css";

syncThemeFromStorage();

function LocaleRoot() {
  useLocale();
  return <TrayMenu />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleRoot />
  </React.StrictMode>
);
