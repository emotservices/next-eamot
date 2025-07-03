import Cta from "@/components/common/Cta";
import Features from "@/components/about/Features";
import FlatTitle from "@/components/about/FlatTitle";
import Partners from "@/components/about/Partners";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import Tools from "@/components/about/Tools";
import VideoSection from "@/components/about/VideoSection";
import Mouse from "@/components/common/Mouse";
import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Awards from "@/app/(homes)/home-2/Awards";

export const metadata = {
  title: "About Us || EAMOT - EMaaS and CMMS",
  description: "EAMOT - EMaaS and CMMS",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Features />
          <Tools />
          <Team />
          <Partners />
          <VideoSection />
          <Testimonials />
          <Awards />
          <Cta />

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
