import { pricingPlans } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="wg-pricing-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1920}
        height={666}
        viewBox="0 0 1920 666"
        fill="none"
      >
        <path
          d="M775.356 182C562.951 140.8 169.95 259.5 0 324V666H1920C1919.83 543.167 1919.6 238 1920 0C1712.43 309 1040.86 233.5 775.356 182Z"
          fill="url(#paint0_linear_17_22901)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_17_22901"
            x1={960}
            y1={0}
            x2={960}
            y2={666}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.05" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <div className="main-title">
                Energy Packages{" "}
                <span
                  className="tf-color-green"
                  style={{ fontStyle: "italic" }}
                >
                  EMaaS
                </span>
              </div>
              <div className="text">
                Whether you decide to use project pricing or package pricing you
                are essentially
                <br />
                grouping your services together and charging a fixed price to
                the client
              </div>
            </div>
          </div>

          {pricingPlans.map((elm, i) => (
            <div key={i} className="col-md-4">
              <div className={`pricing-item style-1 ${i == 1 ? "active" : ""}`}>
                <div className="flex items-center justify-between top">
                  <h3>{elm.title}</h3>
                </div>
                <p>{elm.description}</p>
                <ul className="mb-40">
                  {elm.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="icon-check" style={{ color: "#1ec28b" }} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`tf-button style-3 ${i !== 1 ? "h45" : ""}`}
                >
                  <span>Get Started</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
