import { services } from "@/data/services";
import React from "react";

export default function Helpfull() {
  return (
    <div className="helpful pt-130 pb-130" style={{ backgroundColor: "white" }}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>
                Discover Advanced Energy Management Features Powered by IoT
              </h6>
              <div className="main-title">
                One platform enables real-time monitoring, actionable insights,
                and seamless automation to achieve your <br /> Artificial{" "}
                <span className="animation-text">energy efficiency goals</span>
              </div>
            </div>
          </div>
          {services.map((elm, i) => (
            <div key={i} className="col-xl-2 col-md-3 col-6">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className={elm.iconClass} />
                </div>
                <h6>
                  <a href="#">{elm.text}</a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
