import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { LanguageProvider } from "./i18n/LanguageContext";

// 禁止所有圖片的右鍵菜單與拖曳
document.addEventListener("contextmenu", (e) => {
  if (e.target && e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target && e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
