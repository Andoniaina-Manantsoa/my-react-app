import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/Styles/main.scss";

// Render the main application component into the root DOM element
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
