import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function Design2() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Benefits of EMaaS and CMMS</h6>
                <div className="main-title">
                  Quantifying the Advantages of
                  <span className="animation-text tf-color-green">
                    Our Solutions
                  </span>
                </div>
              </div>
              <p className="">
                Experience significant improvements in operational efficiency
                and cost savings with our integrated EMaaS and CMMS solutions.
                <br /> Leverage data-driven insights to enhance decision-making
                and optimize resource management.{" "}
              </p>
              <div className="row mb-4">
                <div className="col-4">
                  <div className="stat-block">
                    <div
                      className="stat-value"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      <Counter
                        parentClass={"number"}
                        max={15}
                        min={0}
                        decimals={0}
                      />{" "}
                      %
                    </div>
                    <div
                      className="stat-label text-white"
                      style={{ fontSize: "1rem" }}
                    >
                      Savings in Energy
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-block">
                    <div
                      className="stat-value"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      <Counter
                        parentClass={"number"}
                        max={22}
                        min={0}
                        decimals={0}
                      />{" "}
                      %
                    </div>
                    <div
                      className="stat-label text-white"
                      style={{ fontSize: "1rem" }}
                    >
                      Savings in R&amp;M
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-block">
                    <div
                      className="stat-value"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      <Counter
                        parentClass={"number"}
                        max={4.4}
                        min={0}
                        decimals={1}
                      />{" "}
                      %
                    </div>
                    <div
                      className="stat-label text-white"
                      style={{ fontSize: "1rem" }}
                    >
                      Reduction in Carbon Footprint
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/home/BFSI-Dash.png"
                alt="image"
                width={558}
                height={522}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
