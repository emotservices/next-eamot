import React from "react";
import FlatTitle from "@/components/about/FlatTitle";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Link from "next/link";

export default function Insights() {
  return (
    <>
      <Header2 />
      <FlatTitle />
      <div
        className="themesflat-container"
        style={{ minHeight: 400, padding: "40px 0" }}
      >
        <h2>Insights & Whitepapers</h2>
        <p>
          Explore our latest insights and download our whitepaper for in-depth
          knowledge on energy management.
        </p>
        <Link href="/insights/whitepaper" legacyBehavior>
          <a className="tf-button type-1" style={{ marginTop: 24 }}>
            Open EAMOT Whitepaper (Flipbook)
          </a>
        </Link>
      </div>
      <Footer2 />
    </>
  );
}
