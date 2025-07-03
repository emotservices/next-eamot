import React from "react";
import Image from "next/image";
export default function Awards() {
  return (
    <div className="wg-create-design style-2 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Awards and Recognition</h6>
                <div className="main-title">
                  <span className="animation-text tf-color-green">
                    EAMOT is recognized from Government of Karnataka as a part
                    of Invest Karnataka 2025 by VentureRise
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/home/awards-min.png"
                alt="image"
                width={644}
                height={476}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
