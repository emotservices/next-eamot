import { features } from "@/data/features";
import React from "react";

export default function Doing() {
  return (
    <div className="wg-doing">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-green">Our Solutions</h6>
              <div className="main-title">
                Comprehensive Energy Management Platform with&nbsp;
                <br /> Real-time Monitoring, CMMS Integration, and <br />
                &nbsp;AI-powered{" "}
                <span className="animation-text tf-color-green">
                  Field Service Management
                </span>
              </div>
            </div>
          </div>
          {features.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`doing-item ${index == 1 ? "active" : ""}`}>
                <div className="icon">
                  <span className={item.icon} />
                </div>
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
