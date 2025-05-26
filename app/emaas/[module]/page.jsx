import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";
import React from "react";
import { emaasModules } from "@/data/emaas-data";
import FlatTitleFeature from "../FlatTitleFeature";
import Intro from "../Intro";
import FAQEMaaS from "../FAQEMaaS";
import Steps from "@/components/use-cases/Steps";

export default function EMaaSModulePage({ params }) {
  const moduleKey = params.module;
  const moduleData = emaasModules.find((m) => m.key === moduleKey);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitleFeature moduleKey={moduleKey} />
          <Intro
            title={moduleData.title}
            description={moduleData.description}
            moduleData={moduleData}
          />

          <FAQEMaaS faqs={moduleData.faqs} />
          <section className="emaas-steps-section">
            {/* <h2>How {moduleData.breadcrumbsTitle} Works in 4 Steps</h2> */}
            <Steps
              steps={moduleData.steps}
              sectionTitle={`How ${moduleData.breadcrumbsTitle} Works`}
            />
          </section>
          <Cta />
          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
