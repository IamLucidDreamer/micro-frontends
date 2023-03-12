import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "home" }} />
    <div className="py-20 bg-red-200">
      <h1 className=" text-3xl">This the body of the Home App.</h1>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
