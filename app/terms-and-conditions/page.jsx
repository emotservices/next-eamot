import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import Cta from "@/components/homes/home-1/Cta";
import Mouse from "@/components/common/Mouse";
import Link from "next/link";
import ScrollTop from "@/components/common/ScrollTop";

export const metadata = {
  title: "Terms and Conditions || EAMOT - EMaaS and CMMS",
  description: "Terms and Conditions for EAMOT - EMaaS and CMMS",
};

export default function TermsAndConditions() {
  return (
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
                    <div className="heading">Terms and Conditions</div>
                    <ul className="breadcrumbs">
                      <li className="icon-arrow-right relative">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="active">
                        <a href="#">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /flat-title-page */}
            {/* terms-content */}
            <div className="page-content-wrap pb-130 pt-130">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12">
                    <div className="content">
                      <div className="heading-section wow fadeInUp">
                        <div className="main-title">Terms and Conditions</div>
                        <p className="text-muted">
                          Effective Date: 12th June 2025
                        </p>
                        <p className="text-muted">
                          Last Updated: 12th June 2025
                        </p>
                      </div>
                      <div className="terms-content">
                        <p>
                          Welcome to Elekron Techsolutions (EAMOT) Pvt. Ltd.
                          ("EAMOT", "we", "us", "our"). These Terms and
                          Conditions ("Terms") govern your access and use of our
                          websites, applications, IoT-based platforms, Field
                          Service App, services, and products, including but not
                          limited to our Energy Management as a Service (EMaaS)
                          and Computerized Maintenance Management Systems
                          (CMMS).
                        </p>
                        <p>
                          By accessing or using any of our platforms or
                          services, you agree to be bound by these Terms. If you
                          do not agree, please refrain from using our services.
                        </p>

                        <h3>1. Use of Services</h3>
                        <p>
                          You may use our services only in compliance with these
                          Terms and applicable laws. You must not misuse our
                          services by interfering with their normal operation,
                          accessing them using unauthorized methods, or trying
                          to extract data not intended for you.
                        </p>

                        <h3>2. Account Registration & Access</h3>
                        <p>
                          You may be required to register and create an account
                          to access our platforms or applications. You are
                          responsible for maintaining the confidentiality of
                          your credentials.
                        </p>
                        <p>
                          You agree that any information you provide is accurate
                          and up to date. You must notify us of any unauthorized
                          use of your account.
                        </p>

                        <h3>3. Data Collection and Use</h3>
                        <p>
                          As part of our services, we collect data through IoT
                          devices installed at your premises, including but not
                          limited to energy usage, equipment health, runtime,
                          load factors, and more.
                        </p>
                        <p>
                          All data is used solely for energy monitoring,
                          analytics, benchmarking, maintenance diagnostics,
                          compliance reporting, and service delivery.
                        </p>
                        <p>
                          See our Privacy Policy for complete details on data
                          collection and protection.
                        </p>

                        <h3>4. Licensing and Intellectual Property</h3>
                        <p>
                          All content, technology, software, analytics, and
                          documentation are owned by EAMOT unless otherwise
                          stated.
                        </p>
                        <p>
                          In OPEX engagements, EAMOT grants clients a
                          non-exclusive, limited license to use the software and
                          reports during the contract term.
                        </p>
                        <p>
                          In CAPEX/Build-for-Brand engagements, clients may
                          retain ownership of custom-built solutions; however,
                          EAMOT retains the right to reuse non-client-specific
                          knowledge, processes, or code for other clients.
                        </p>

                        <h3>5. Restrictions</h3>
                        <p>You shall not:</p>
                        <ul
                          style={{
                            paddingLeft: "1.5rem",
                            listStyle: "disc inside",
                            fontSize: "1rem",
                            display: "block",
                          }}
                        >
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Attempt to reverse-engineer or decompile any part of
                            the software or platform;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Circumvent any access or usage restrictions;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Use the services in any way that may harm EAMOT's
                            reputation or systems;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Resell or sublicense our solutions without prior
                            written approval.
                          </li>
                        </ul>

                        <h3>6. Third-Party Services</h3>
                        <p>
                          We may integrate with third-party services (e.g., AWS,
                          SMS gateways, analytics platforms). EAMOT is not
                          liable for any third-party failures, breaches, or
                          service disruptions beyond our control.
                        </p>

                        <h3>7. Service Availability & Modifications</h3>
                        <p>
                          We strive to maintain uptime and reliability. However,
                          we may need to temporarily suspend services for
                          upgrades, maintenance, or unforeseen circumstances. We
                          reserve the right to modify or discontinue services,
                          features, or access without prior notice.
                        </p>

                        <h3>8. Field Service App</h3>
                        <p>
                          Our Field Service App is used by authorized engineers
                          and service partners.
                        </p>
                        <p>
                          All service activity including timestamps, photos,
                          location, and feedback must be authentic and
                          verifiable.
                        </p>
                        <p>
                          Misuse of the app, including false reporting or
                          unauthorized access, may lead to termination and legal
                          action.
                        </p>

                        <h3>9. Limitation of Liability</h3>
                        <p>EAMOT is not liable for:</p>
                        <ul
                          style={{
                            paddingLeft: "1.5rem",
                            listStyle: "disc inside",
                            fontSize: "1rem",
                            display: "block",
                          }}
                        >
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Any indirect, incidental, or consequential losses;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Business disruption, data loss, or losses arising
                            from energy inefficiencies outside our control;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Delays or service failures caused by client
                            infrastructure, third-party services, or force
                            majeure.
                          </li>
                        </ul>
                        <p>
                          Maximum liability, if proven, shall be limited to the
                          amount paid to EAMOT in the preceding 3 months for the
                          affected service.
                        </p>

                        <h3>10. Termination</h3>
                        <p>
                          We reserve the right to terminate or suspend your
                          access to our services for:
                        </p>
                        <ul
                          style={{
                            paddingLeft: "1.5rem",
                            listStyle: "disc inside",
                            fontSize: "1rem",
                            display: "block",
                          }}
                        >
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Violation of these Terms;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Legal or regulatory obligations;
                          </li>
                          <li
                            style={{
                              display: "list-item",
                              listStyleType: "disc",
                              marginBottom: "0.5rem",
                              lineHeight: "1.5",
                              fontSize: "1.5rem",
                            }}
                          >
                            Non-payment or misuse of services.
                          </li>
                        </ul>
                        <p>
                          Upon termination, access will be revoked, and data may
                          be archived or deleted based on our Data Retention
                          Policy.
                        </p>

                        <h3>11. Governing Law & Jurisdiction</h3>
                        <p>
                          These Terms shall be governed by and construed in
                          accordance with the laws of India, with the courts of
                          Bengaluru, Karnataka having exclusive jurisdiction
                          over any disputes.
                        </p>

                        <h3>12. Amendments</h3>
                        <p>
                          EAMOT may revise these Terms from time to time.
                          Updated terms will be posted with a revised "Last
                          Updated" date. Continued use of the services
                          constitutes acceptance of the revised Terms.
                        </p>

                        <h3>13. Contact Us</h3>
                        <p>For any questions, clarifications, or issues:</p>
                        <p>
                          Elekron Techsolutions (EAMOT) Pvt. Ltd.
                          <br />
                          2nd Floor, 58/1, Paramahansa Yogananda Rd,
                          <br />
                          Opp. Arun CADD, Indiranagar,
                          <br />
                          Bengaluru, Karnataka – 560038
                          <br />
                          Email: info@emotservices.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /terms-content */}
          </>

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
