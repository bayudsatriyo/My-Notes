// import React from "react";
import { createRoot } from "react-dom/client";
import MyNotes from "./components/NotesApp";

// import style
import "./styles/output.css";

const root = createRoot(document.getElementById("root") as Element);
root.render(<MyNotes />);
