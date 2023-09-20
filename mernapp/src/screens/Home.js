import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="flex d-flex flex-row">
        <div className="m-3 col-md-4">
          <Card />
        </div>
        <div className="m-3 col-md-4">
          <Card />
        </div>
        <div className="m-3 col-md-4">
          <Card />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
