import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContextProvider from "./context/Store";
import BasicTable from "./BasicTable";
// import Asker from "./Asker";
import HotjarInit from "./HotjarInit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
    <HotjarInit />
      <App />

      {/* its a try Only  */}
      {/* <Asker /> */}

      {/* trying tables */}
      {/* <BasicTable /> */}
    </DataContextProvider>
  </React.StrictMode>
);
