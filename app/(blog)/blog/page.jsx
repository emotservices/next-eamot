import Blog from "@/components/blog/Blog";
import FlatTitle from "@/components/blog/FlatTitle";
import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header2";

import React from "react";
import { client } from "@/lib/contentful";

export const metadata = {
  title: "Blog || EAMOT - EMaaS and CMMS",
  description: "EAMOT - EMaaS and CMMS",
};

export const revalidate = 60; // Regenerate page every 60 seconds

export default async function BlogPage() {
  const res = await client.getEntries({ content_type: "blog" });
  const posts = res.items;

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Blog posts={posts} />
          <Cta />
          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
