import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="cta type-1">
      {imageSources.slice(0, 4).map((elm, i) => (
        <Image
          width={100}
          height={100}
          key={i}
          className={`img${elm.i + 1}`}
          src={elm}
          alt="image"
        />
      ))}

      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="ellipse item4" />
              <div className="ellipse item3" />
              <div className="ellipse item2" />
              <div className="ellipse item1" />
              <div className="cta-title">
                <h6 className="tf-color-yellow">Transform Your Operations</h6>
                <h2>Experience Our Enterprise Asset Management Platform</h2>
                <p className="mt-4">
                  Try our comprehensive suite of EMaaS, CMMS, and Field Service
                  solutions for 14 days
                </p>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <a href="#" className="tf-button style-yellow">
                  <span>Start Free Trial</span>
                  <i className="icon-arrow-right2" />
                </a>
                <a href="#" className="tf-button style-yellow">
                  <span>Schedule Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
