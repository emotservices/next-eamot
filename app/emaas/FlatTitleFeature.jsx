import React from "react";
import Link from "next/link";
import { emaasModules } from "@/data/emaas-data";

export default function FlatTitleFeature({ moduleKey }) {
  const moduleData =
    emaasModules.find((m) => m.key === moduleKey) || emaasModules[0];
  return (
    <div className="flat-title-page">
      <div className="item1 block-blur-1" />
      <div className="item2 block-blur-2" />
      <div className="item3 block-blur-3" />
      <div className="item4 block-blur-4" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              {moduleData.breadcrumbsTitle} <span>Details</span>
            </div>
            <ul className="breadcrumbs">
              <li className="icon-arrow-right relative">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="active">
                <a href="#">{moduleData.title}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
