import React from "react";
import { emaasModules } from "@/data/emaas-data";

export default function Intro({ title, description, moduleData }) {
  return (
    <div className="wg-create-design style-6 pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>What We Provide</h6>
                <div className="main-title">
                  {title || (
                    <>
                      Discover More Helpful <br />
                      Social Media Artificial <br />
                      <span className="animation-text">
                        Intelligence Features
                      </span>
                    </>
                  )}
                </div>
              </div>
              <p className="">
                {description ||
                  "FAQ's about the product and EMaaS by the charms of pleasure"}
              </p>
              <a href="#" className="tf-button type-1">
                <span>Get Started</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {moduleData?.submodules.map((submodule, index) => (
                <div className="col-xl-4 col-6" key={index}>
                  <div className="wg-helpful text-center mb-30 wow fadeInUp">
                    <div className="image">
                      <i className={`${submodule.icon}`} />
                    </div>
                    <h6>{submodule.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
