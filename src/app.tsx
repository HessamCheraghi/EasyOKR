import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@/components/ThemeProvider";
import "./index.css";
import Dashboard from "@/components/Dashboard";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
);
