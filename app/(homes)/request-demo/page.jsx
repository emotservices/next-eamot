import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import RequestDemoForm from "@/components/common/RequestDemoForm";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";

export const metadata = {
  title: "Request Demo - EAMOT",
  description: "Request a demo of EAMOT's EMaaS and CMMS solutions",
};

export default function RequestDemoPage() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="request-demo">
          <Header2 />
          <div className="flat-title-page">
            <div className="item1 block-blur-1" />
            <div className="item2 block-blur-2" />
            <div className="item3 block-blur-3" />
            <div className="item4 block-blur-4" />
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    Request a <span>Demo</span>
                  </div>
                  <p className="sub-heading">
                    Experience how EAMOT can transform your asset management and
                    maintenance operations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-request-demo">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <div className="demo-content">
                    <div className="demo-text">
                      <h2>Why Choose EAMOT?</h2>
                      <ul>
                        <li>
                          <i className="icon-check" />
                          Comprehensive Asset Management
                        </li>
                        <li>
                          <i className="icon-check" />
                          Predictive Maintenance Solutions
                        </li>
                        <li>
                          <i className="icon-check" />
                          Real-time Equipment Monitoring
                        </li>
                        <li>
                          <i className="icon-check" />
                          Advanced Analytics & Reporting
                        </li>
                        <li>
                          <i className="icon-check" />
                          Compliance & Safety Management
                        </li>
                      </ul>
                    </div>
                    <div className="demo-form">
                      <RequestDemoForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
