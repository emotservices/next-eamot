"use client";
import { languageItems, languageItems2 } from "@/data/editorLanguages";
import React from "react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
export default function EditorLanguages() {
  const swiperOptions1 = {
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    slidesPerView: "auto",
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  };
  const swiperOptions2 = {
    loop: true,
    spaceBetween: 30,
    speed: 10000,
    slidesPerView: "auto",
    modules: [Autoplay],
    autoplay: {
      delay: "0",
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  };
  return (
    <div className="editors-languages">
      <div className="themesflat-container full">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-green">OEM & &amp; Hardware Agnostic</h6>
              <div className="main-title">
                We support all OEMs and hardware <br />
                for integrated EMS and CMMS{" "}
                <span className="animation-text tf-color-green">
                  for over 50+ Clients
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 mb-30">
            <div className="grid-languages">
              <Swiper {...swiperOptions1} className="swiper-container e-resize">
                {languageItems.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="language-item">
                      <Image src={elm.src} width={80} height={80} alt="image" />
                      <div className="title">
                        <a href="#">{elm.title}</a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-12">
            <div className="grid-languages">
              <Swiper className="swiper-container e-resize" {...swiperOptions2}>
                {languageItems2.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="language-item">
                      <Image src={elm.src} width={80} height={80} alt="image" />
                      <div className="title">
                        <a href="#">{elm.title}</a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image wow fadeInUp">
                <Image
                  className="img-01"
                  src="/assets/images/home/emaas-dh.gif"
                  alt="image"
                  width={552}
                  height={480}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="heading-section wow fadeInUp style-1">
                  <h6 className="tf-color-green">
                    Why Choose Our EMaaS Solutions?
                  </h6>
                  <div className="main-title">
                    Features of EAMOT's <br /> EMaaS{" "}
                    <span className="animation-text tf-color-green">
                      Platform
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-white">
                  Empowering Businesses with Data-backed decisions for Energy
                  Savings
                </p>
                <ul className="list-item">
                  <li className="text-white">
                    <i className="icon-tick" />
                    Real-Time Monitoring: Track energy usage and system health
                    24/7
                  </li>
                  <li className="text-white">
                    <i className="icon-tick" />
                    Custom Dashboards: Visualize energy data tailored to your
                    business needs
                  </li>
                  <li className="text-white">
                    <i className="icon-tick" />
                    Predictive Maintenance: Avoid costly breakdowns with
                    AI-powered alerts
                  </li>
                  <li className="text-white">
                    <i className="icon-tick" />
                    Multi-Site Management: Monitor and manage multiple locations
                    from one platform
                  </li>
                  <li className="text-white">
                    <i className="icon-tick" />
                    Carbon Footprint Tracking: Simplify emissions reporting with
                    accurate data
                  </li>
                </ul>
                <a href="#" className="tf-button style-2">
                  <span>Request Free Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
