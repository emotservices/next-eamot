"use client";
import { categories, recentBlogs, tags } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="wg-search mb-30">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-form relative"
        >
          <fieldset className="search">
            <input
              type="search"
              placeholder="Search keywords"
              className="style-1"
              name="search"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
          <i className="icon-search" />
        </form>
      </div>
      <div className="widget widget-categories">
        <h4 className="title-widget">Categories</h4>
        <ul>
          {[
            "Asset Management",
            "Preventive Maintenance",
            "Predictive Maintenance",
            "Work Order Management",
            "Inventory Management",
            "Equipment Monitoring",
            "Compliance & Safety",
            "Energy Management",
            "Sustainability",
            "Maintenance Analytics",
          ].map((category, index) => (
            <li key={index}>
              <div className="cate-item">
                <a href="#">{category}</a>
              </div>
              <i className="icon-arrow-right" />
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-recent-news">
        <h4 className="title-widget">Recent Articles</h4>
        {[
          {
            id: 1,
            imgSrc: "/assets/images/blog/related-01.jpg",
            title: "Best Practices for Preventive Maintenance Planning",
            date: "15 May 2024",
          },
          {
            id: 2,
            imgSrc: "/assets/images/blog/related-02.jpg",
            title: "How IoT is Transforming Asset Management",
            date: "12 May 2024",
          },
          {
            id: 3,
            imgSrc: "/assets/images/blog/sidebar-02.jpg",
            title: "Implementing Predictive Maintenance Strategies",
            date: "10 May 2024",
          },
          {
            id: 4,
            imgSrc: "/assets/images/blog/sidebar-03.jpg",
            title: "Optimizing Maintenance Workflows with CMMS",
            date: "8 May 2024",
          },
        ].map((newsItem, index) => (
          <div className="recent-news-item" key={index}>
            <div className="card-media">
              <Image
                src={newsItem.imgSrc}
                width={180}
                height={180}
                alt={newsItem.title}
              />
            </div>
            <div className="card-content">
              <h6>
                <Link href={`/blog-detail/${newsItem.id}`}>
                  {newsItem.title}
                </Link>
              </h6>
              <div className="date">{newsItem.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="widget-trailer">
        <Image
          src="/assets/images/blog/sidebar-01.jpg"
          width={410}
          height={455}
          alt="image"
        />
        <div className="content">
          <div className="title">
            <div className="text">Start Your 14-Day</div>
            <span className="text-1">Free Trial of </span>
            <span className="text-2">EAMOT Platform</span>
          </div>
          <p>
            Experience the power of modern asset management and maintenance
            solutions
          </p>
          <a href="#" className="tf-button">
            <span>Get Started</span>
            <i className="icon-arrow-right2" />
          </a>
        </div>
      </div>
      <div className="widget widget-tag">
        <h4 className="title-widget">Popular Tags</h4>
        <ul className="flex flex-wrap gap10">
          {[
            "Maintenance",
            "Assets",
            "IoT",
            "Predictive",
            "Analytics",
            "Compliance",
            "Safety",
            "Energy",
            "Sustainability",
            "Work Orders",
          ].map((tag, index) => (
            <li key={index}>
              <a href="#">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
