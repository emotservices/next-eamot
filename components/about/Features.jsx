import { listItems } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="wg-create-design style-5 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-6">
            <div className="image text-center wow fadeInUp">
              <Image
                src="/assets/images/bg-section/image-17.png"
                width={555}
                height={485}
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Innovating in Energy Management</h6>
                <p>
                  Since 25 years, led by founder Manish Kapoor, our team of
                  experts is dedicated to providing innovative and customized
                  solutions that help our clients optimize their energy usage
                  and reduce costs. We leverage the latest technologies,
                  including IoT and AI, to provide real-time data and predictive
                  analytics that enable smarter energy management.
                </p>
              </div>
              <ul className="list-item">
                {listItems.map((elm, i) => (
                  <li key={i}>
                    <i className="icon-tick" />
                    {elm.text}
                  </li>
                ))}
              </ul>
              <a href="#" className="tf-button type-1">
                <span>Career Opportunities</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
