import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@/components/config/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>hello world!</ThemeProvider>
  </React.StrictMode>
);
