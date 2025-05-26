import Footer4 from "@/components/footers/Footer2";
import Header4 from "@/components/headers/Header2";
import Faq from "@/components/homes/home-4/Faq";
import Banner from "@/components/homes/home-4/Banner";
import Clients from "@/components/homes/home-4/Clients";
import Cta from "@/components/homes/home-4/Cta";
import Features from "@/components/homes/home-4/Features";
import Partners from "@/components/homes/home-4/Partners";
import Pricing from "@/components/homes/home-4/Pricing";
import Services from "@/components/homes/home-4/Services";
import WhyChoose from "@/components/homes/home-4/WhyChoose";
import React from "react";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "EAMOT - Energy Manager as a Service and CMMS",
  description:
    "First in India to offer EMaaS and CMMS with 25 years of experience in Electro-Mechanical Field",
};
export default function page() {
  return (
    <>
      <div className="page-yellow">
        <div id="wrapper">
          <div id="page" className="home4">
            <Header4 />
            <Banner />
            <Partners />
            <WhyChoose />
            <Features />
            <Services />
            <Clients />

            <Faq />
            <Cta />
            <Footer4 />
          </div>
        </div>
        <Mouse />
        <ScrollTop />
      </div>
    </>
  );
}
