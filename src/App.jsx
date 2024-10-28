import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from './Pet';
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" /> */}
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));