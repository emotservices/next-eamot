"use client";
import Image from "next/image";
import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Blog({ posts = [] }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="tf-blog">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-4 col-12">
              <Sidebar />
            </div>
            <div className="col-md-8 col-12">
              <div className="wrap-inner">
                <div className="blog-article-list">
                  {posts.map((post) => (
                    <div className="blog-article" key={post.sys.id}>
                      <div className="card-media">
                        {console.log(post)}
                        {post.fields.featuredBanner &&
                          post.fields.featuredBanner[0]?.fields?.file?.url && (
                            <Image
                              src={`https:${post.fields.featuredBanner[0].fields.file.url}`}
                              width={850}
                              height={510}
                              alt={post.fields.title}
                            />
                          )}
                      </div>
                      <div className="wrapper-info">
                        <div className="meta">
                          <div className="date">
                            {post.fields.contentCreated
                              ? new Date(
                                  post.fields.contentCreated
                                ).toLocaleDateString()
                              : ""}
                          </div>
                        </div>
                        <h3>
                          <Link href={`/blog-detail/${post.fields.slug}`}>
                            {post.fields.title}
                          </Link>
                        </h3>
                        <div className="bottom">
                          <div className="author">
                            <i className="icon-details" />
                            {/* Add author if you have it in your model */}
                            <p>
                              {
                                post.fields.contentBlog.content[0].content[0]
                                  .value
                              }
                            </p>
                          </div>
                          <Link
                            href={`/blog-detail/${post.fields.id}`}
                            className="tf-button-default"
                          >
                            Read More <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                        <div>
                          {/* If you have categories, render them here */}
                        </div>
                        <div>
                          {/* Render excerpt or a snippet of content_blog */}
                          <span>
                            {post.fields.content_blog?.content?.[0]?.content?.[0]?.value?.slice(
                              0,
                              120
                            ) || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="widget-pagination">
                  <ul className="">
                    <Pagination />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Y8XpQpW5OVY"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
