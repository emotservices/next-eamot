import React from "react";
import FlatTitle from "@/components/about/FlatTitle";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
// If you have a PDF flipper component, import it here. Otherwise, use a placeholder.
// import PdfFlipper from "@/components/common/PdfFlipper";

export default function Whitepaper() {
  return (
    <>
      <Header2 />
      <FlatTitle />
      <div
        className="themesflat-container"
        style={{ minHeight: 600, padding: "40px 0" }}
      >
        <h2>EAMOT Whitepaper</h2>
        {/* Replace the iframe below with your PdfFlipper component if available */}
        <iframe
          src="/assets/pdfs/Whitepaper-EAMOT.pdf"
          width="100%"
          height="800px"
          style={{ border: "none", borderRadius: 8 }}
          title="EAMOT Whitepaper PDF"
        />
      </div>
      <Footer2 />
    </>
  );
}
