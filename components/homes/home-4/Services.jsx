import React from "react";

const servicesItems = [
  {
    iconClass: "icon-energy",
    title: "Energy Analytics & Monitoring",
    description:
      "Real-time energy consumption tracking with AI-powered analytics and automated reporting for optimal resource utilization.",
    link: "#",
  },
  {
    iconClass: "icon-maintenance",
    title: "Predictive Maintenance",
    description:
      "AI-driven maintenance predictions to prevent equipment failures and optimize maintenance schedules.",
    link: "#",
  },
  {
    iconClass: "icon-mobile",
    title: "Mobile Field Operations",
    description:
      "Seamless mobile access for field technicians with offline capabilities and real-time synchronization.",
    link: "#",
  },
  {
    iconClass: "icon-asset",
    title: "Asset Lifecycle Management",
    description:
      "Comprehensive tracking of asset performance, maintenance history, and lifecycle costs.",
    link: "#",
  },
  {
    iconClass: "icon-workorder",
    title: "Work Order Management",
    description:
      "Streamlined work order creation, assignment, and tracking with automated notifications.",
    link: "#",
  },
  {
    iconClass: "icon-report",
    title: "Advanced Reporting",
    description:
      "Customizable dashboards and reports for data-driven decision making and performance tracking.",
    link: "#",
  },
];

export default function Services() {
  return (
    <div className="wg-services">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-yellow">Key Features</h6>
              <div className="main-title">
                Comprehensive Enterprise <br />
                Solutions for{" "}
                <span className="animation-text tf-color-yellow">
                  Energy and Operational Management
                </span>
              </div>
            </div>
          </div>
          {servicesItems.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="services-item wow fadeInUp">
                <div className="icon">
                  <i className={item.iconClass} />
                </div>
                <div className="content flex-grow">
                  <h4>{item.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <a className="" href={item.link}>
                  <i className="icon-arrow-up2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
