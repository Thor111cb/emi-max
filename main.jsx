import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const handleClick = () => {
    console.log("clic!");
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic</button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);