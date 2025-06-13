import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import Cta from "@/components/homes/home-1/Cta";
import Mouse from "@/components/common/Mouse";
import Link from "next/link";
import ScrollTop from "@/components/common/ScrollTop";

export const metadata = {
  title: "Privacy Policy || EAMOT - EMaaS and CMMS",
  description: "Privacy Policy for EAMOT - EMaaS and CMMS",
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <>
        <div id="wrapper">
          <div id="page" className="">
            <Header1 />
            <>
              {/* flat-title-page */}
              <div className="flat-title-page">
                <div className="item1 block-blur-1" />
                <div className="item2 block-blur-2" />
                <div className="item3 block-blur-3" />
                <div className="item4 block-blur-4" />
                <div className="themesflat-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="heading">Privacy Policy</div>
                      <ul
                        className="breadcrumbs"
                        style={{
                          paddingLeft: "1.5rem",
                          listStyle: "disc inside",
                          fontSize: "1.5rem",
                          display: "block",
                        }}
                      >
                        <li
                          className="icon-arrow-right relative"
                          style={{
                            display: "list-item",
                            listStyleType: "disc",
                            marginBottom: "0.5rem",
                            lineHeight: "1.5",
                          }}
                        >
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className="active"
                          style={{
                            display: "list-item",
                            listStyleType: "disc",
                            marginBottom: "0.5rem",
                            lineHeight: "1.5",
                          }}
                        >
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /flat-title-page */}
              {/* privacy-content */}
              <div className="page-content-wrap pb-130 pt-130">
                <div className="themesflat-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content">
                        <div className="heading-section wow fadeInUp">
                          <div className="main-title">Privacy Policy</div>
                          <p className="text-muted">
                            Effective Date: 6th June 2025
                          </p>
                          <p className="text-muted">
                            Last Updated: 12th June 2025
                          </p>
                        </div>
                        <div className="privacy-content">
                          <p>
                            Elekron Techsolutions (EAMOT) Pvt. Ltd. ("EAMOT",
                            "we", "us", or "our") is committed to safeguarding
                            the privacy and data of our clients, field
                            personnel, and users of our platforms including our
                            Energy Management as a Service (EMaaS) platform,
                            Field Service App, and any other digital services we
                            operate.
                          </p>
                          <p>
                            This Privacy Policy outlines how we collect, use,
                            disclose, and secure your data, particularly as it
                            relates to our Internet of Things (IoT)
                            infrastructure, field service management, and
                            analytics offerings.
                          </p>

                          <h3>1. Scope of this Policy</h3>
                          <p>
                            This Privacy Policy applies to all data collected
                            through:
                          </p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              IoT sensors and connected energy monitoring
                              devices installed on client premises;
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Our EMaaS dashboard and reporting platforms;
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              The Field Service App used by our partners and
                              technicians;
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Our corporate websites, mobile applications, and
                              any digital interfaces provided by EAMOT.
                            </li>
                          </ul>

                          <h3>2. Data We Collect</h3>
                          <p>We collect the following types of data:</p>
                          <h4>a. Operational and Energy Data</h4>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Power consumption, voltage, current, frequency,
                              power factor, load usage
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Generator health metrics, runtime, fuel levels,
                              engine parameters
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Data captured via Modbus, MQTT, or HTTP from smart
                              meters, sensors, and controllers
                            </li>
                          </ul>

                          <h4>b. User and Branch Metadata</h4>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Branch ID, site name, location (GPS coordinates)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Contact information of designated SPOCs
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Device and gateway configuration details
                            </li>
                          </ul>

                          <h4>c. Field Service Data</h4>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Work order logs, ticket status, preventive
                              maintenance (PM) and breakdown records
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Photographs, timestamps, and geolocation from the
                              Field Service App
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Notes, signatures, and other proof-of-service data
                            </li>
                          </ul>

                          <h4>d. Device & Usage Information</h4>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              IP address, browser type, operating system
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Logs of dashboard access, report generation, and
                              API activity
                            </li>
                          </ul>

                          <h4>e. Personal Information (where applicable)</h4>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Name, mobile number, email ID of client
                              stakeholders and field partners
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              KYC details (for partners and vendors, where
                              mandated)
                            </li>
                          </ul>

                          <h3>3. How We Use the Data</h3>
                          <p>We use the collected data to:</p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Monitor and improve energy efficiency and asset
                              health
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Generate predictive maintenance alerts and
                              insights
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Benchmark electrical performance across client
                              sites
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Enable real-time and historical data visualization
                              via EMaaS
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Track ticket status, engineer activity, and
                              on-site visit compliance
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Improve our products, analytics, and service
                              reliability
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Comply with BRSR, ESG, CAQM, CPCB, and other
                              regulatory frameworks
                            </li>
                          </ul>

                          <h3>4. Data Sharing and Disclosure</h3>
                          <p>
                            We do not sell your personal or operational data.
                          </p>
                          <p>We may share data with:</p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Authorized client users and departments
                              (Operations, Procurement, Sustainability, etc.)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Field Partners and Technicians (on a need-to-know
                              basis for task execution)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Regulatory Authorities (only when required by law)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Third-Party Tools/Services (e.g., AWS, analytics
                              platforms), under strict data processing
                              agreements (DPAs)
                            </li>
                          </ul>

                          <h3>5. Data Security</h3>
                          <p>
                            We adopt best-in-class data protection practices:
                          </p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              End-to-end encryption of sensitive data in transit
                              and at rest
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Role-based access control (RBAC) and multi-factor
                              authentication (MFA)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Secure cloud storage on ISO-certified
                              infrastructure (e.g., AWS, Azure)
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Regular internal audits and vulnerability
                              assessments
                            </li>
                          </ul>

                          <h3>6. Data Retention</h3>
                          <p>
                            We retain your data for as long as necessary to:
                          </p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Deliver our contractual services
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Meet compliance obligations
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Resolve disputes, and
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Improve platform performance
                            </li>
                          </ul>
                          <p>
                            After the retention period, data is securely
                            archived or deleted in accordance with our data
                            destruction policies.
                          </p>

                          <h3>7. Your Rights</h3>
                          <p>
                            Depending on applicable jurisdiction (e.g., Indian
                            IT Act, GDPR if relevant), you may have rights to:
                          </p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Access, correct, or delete your data
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Request data portability
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Object to processing
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Withdraw consent (where consent was given)
                            </li>
                          </ul>
                          <p>
                            You may reach out to info@emotservices.com for
                            exercising any of these rights.
                          </p>

                          <h3>8. Cookies and Tracking</h3>
                          <p>
                            We use minimal cookies or session tracking on our
                            platforms only for:
                          </p>
                          <ul
                            style={{
                              paddingLeft: "1.5rem",
                              listStyle: "disc inside",
                              fontSize: "1.5rem",
                              display: "block",
                            }}
                          >
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Authentication
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              User session management
                            </li>
                            <li
                              style={{
                                display: "list-item",
                                listStyleType: "disc",
                                marginBottom: "0.5rem",
                                lineHeight: "1.5",
                              }}
                            >
                              Dashboard performance analytics
                            </li>
                          </ul>
                          <p>
                            No third-party ad trackers or behavioral profiling
                            is done.
                          </p>

                          <h3>9. Children's Privacy</h3>
                          <p>
                            Our services are intended for business and
                            industrial use only and are not directed toward
                            children under the age of 18. We do not knowingly
                            collect personal information from minors.
                          </p>

                          <h3>10. Changes to This Privacy Policy</h3>
                          <p>
                            EAMOT may update this Privacy Policy periodically.
                            Any changes will be communicated through our
                            official channels and reflected in the "Last
                            Updated" section above.
                          </p>

                          <h3>11. Contact Information</h3>
                          <p>
                            For questions, requests, or complaints regarding
                            this policy:
                          </p>
                          <p>
                            Data Protection Officer
                            <br />
                            Elekron Techsolutions (EAMOT) Pvt. Ltd.
                            <br />
                            Email: info@emotservices.com
                            <br />
                            Address: 2nd Floor, 58/1, Paramahansa Yogananda Rd,
                            opp. Arun CADD, Indiranagar, Bengaluru, Karnataka
                            560038
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /privacy-content */}
            </>

            <Footer1 />
          </div>
        </div>
        <Mouse />
        <ScrollTop />
      </>
    </div>
  );
}
