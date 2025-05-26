import React from "react";
import Image from "next/image";

const boxFeatureItems = [
  {
    itemClass: "item2",
    title: "EMaaS",
    highlightedText: " for Energy Monitoring",
    description:
      "Monitor and optimize energy consumption across your enterprise with real-time analytics and AI-powered insights.",
    imgSrc: "/assets/images/home/platform/emaas.png",
  },
  {
    itemClass: "item3",
    title: "CMMS",
    highlightedText: " for Operational Excellence",
    description:
      "Streamline maintenance operations with predictive analytics, work order management, and asset lifecycle tracking.",
    imgSrc: "/assets/images/home/platform/cmms.png",
  },
];

export default function Features() {
  return (
    <div className="wg-box-features pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="grid-box-features">
              <div className="box-feature-item item1">
                <div className="image">
                  <Image
                    src="/assets/images/home/EMaaS-btm.jpg"
                    alt="image"
                    width={344}
                    height={350}
                  />
                </div>
                <div className="content">
                  <div className="title">
                    Comprehensive Enterprise Solutions in
                    <span className="tf-color-yellow"> One Platform</span>
                  </div>
                  <p>
                    Transform your enterprise operations with our integrated
                    suite of solutions. From energy management to asset
                    maintenance and field service, we provide everything you
                    need to optimize your operations and reduce costs.
                  </p>
                  <ul className="list-item">
                    <li>
                      <i className="icon-tick" />
                      Real-time monitoring and analytics
                    </li>
                    <li>
                      <i className="icon-tick" />
                      AI-powered predictive maintenance
                    </li>
                    <li>
                      <i className="icon-tick" />
                      Mobile-first field service management
                    </li>
                  </ul>
                  <a href="#" className="tf-button style-yellow">
                    <span>Explore Solutions</span>
                    <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
              <div className="d-flex flex-row">
                {boxFeatureItems.map((item, index) => (
                  <div
                    className={`box-feature-item ${item.itemClass}`}
                    key={index}
                  >
                    <div className="item-1" />
                    <div className="item-2" />

                    <div className="title">
                      {item.title}
                      <span className="tf-color-yellow">
                        {item.highlightedText}
                      </span>
                    </div>
                    <p>{item.description}</p>
                    <div className="image">
                      <Image
                        src={item.imgSrc}
                        width={403}
                        height={178}
                        alt={item.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
