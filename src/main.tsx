import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@/components/config/ThemeProvider";
import "./index.css";
import { Dashboard } from "./components/container/dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
