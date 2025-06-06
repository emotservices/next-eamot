import React from "react";
import Image from "next/image";
import Header2 from "../components/headers/Header2";
import Footer from "../components/footers/Footer2";

const AboutPage = () => {
  return (
    <>
      <Header2 />
      <div className="about-page">
        <section className="hero">
          <h1>Your Trusted Energy Partner</h1>
          <p>Let your data help you to take SMART decisions</p>
          <div className="experience">
            <h2>24</h2>
            <p>Years Experience</p>
          </div>
        </section>
        <section className="innovation">
          <h2>Innovating in Energy Management</h2>
          <p>
            Since 24 years, led by founder Manish Kapoor, our team of experts is
            dedicated to providing innovative and customized solutions that help
            our clients optimize their energy usage and reduce costs. We
            leverage the latest technologies, including IoT and AI, to provide
            real-time data and predictive analytics that enable smarter energy
            management.
          </p>
          <div className="features">
            <div>
              <h3>Experienced Support</h3>
            </div>
            <div>
              <h3>Innovative IT Team</h3>
            </div>
          </div>
        </section>
        <section className="excellence">
          <h2>Powering Excellence Together</h2>
          <p>
            At EAMOT, excellence is our promise. With a skilled team of
            electrical, mechanical, and IT experts, we are the go-to solution
            for Diesel Generators, UPS, and Voltage Servo Stabilizers. Our
            commitment to innovation drives us to adopt cutting-edge
            technologies, ensuring optimal performance and energy efficiency.
            With round-the-clock support, safety-first approach, and tailored
            solutions, we exceed expectations. Transparent communication and
            customer-centricity are our hallmarks. Trust us to power your
            success with our dedication and expertise. Choose EAMOT for
            unmatched service and solutions.
          </p>
        </section>
        <section className="mission-vision">
          <div className="mission">
            <h3>Mission</h3>
            <p>
              Our mission is to reduce costs incurred in Repair & Maintenance of
              Electrical & Mechanical Utilities by using Technology & moving
              towards predictive/ preventive services.
            </p>
          </div>
          <div className="vision">
            <h3>Vision</h3>
            <p>
              We envision a future where fixing and maintaining Electrical &
              Mechanical Utilities is more affordable and efficient. By
              embracing technology and focusing on proactive services, our goal
              is to make our clients' assets and systems work at their very
              best. We are committed to using smart technology to help our
              clients succeed holistically in the long run, making sure they
              grow sustainably with strategic data-based, informed solutions.
            </p>
          </div>
        </section>
        <section className="team">
          <h2>Meet with team</h2>
          <p>Commitment to excellence</p>
          <div className="team-members">
            <div className="member">
              <h3>Manish Kapoor</h3>
              <p>Founder and MD</p>
            </div>
            <div className="member">
              <h3>Puneet Pruthi</h3>
              <p>Head Of Operation</p>
            </div>
            <div className="member">
              <h3>Shiv k Garg</h3>
              <p>VP : New Energy Initiatives</p>
            </div>
            <div className="member">
              <h3>Nikesh Masiwal</h3>
              <p>Head Of Engineering</p>
            </div>
            <div className="member">
              <h3>Akanksha</h3>
              <p>SDE 1 - Frontend</p>
            </div>
            <div className="member">
              <h3>Ashwini</h3>
              <p>Team Leader : Operations</p>
            </div>
            <div className="member">
              <h3>Balveer Gyasi</h3>
              <p>Senior Technical Support</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
