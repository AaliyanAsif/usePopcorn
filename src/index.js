import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/StarRating";
import Appv1 from "./App-v1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Appv1 /> */}
    {/* <StarRating
      maxRating={5}
      messages={["terriable", "not good", "fine", "good", "very good"]}
    />
    <StarRating maxRating={5} size={20} color="red" defaultRating={3} /> */}
  </React.StrictMode>
);
