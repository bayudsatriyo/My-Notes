// import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/output.css";
import Notes_app from "./components/Notes_app";

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <BrowserRouter>
    <Notes_app />
  </BrowserRouter>
);
