import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="wg-banner-2">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="content">
              <div className="title">
                Smart Energy
                <span className="animationtext letters rotate-3 animation-text">
                  <span className="cd-words-wrapper">
                    <span
                      className="item-text tf-color-green is-visible"
                      style={{ opacity: 1 }}
                    >
                      {"Management Monitoring Maintainance"
                        .split(" ")
                        .map((elm, i) => (
                          <span
                            key={i}
                            className="rorateLetterAnim"
                            style={{ animationDelay: i * 0.07 + "s" }}
                          >
                            {elm}
                          </span>
                        ))}
                    </span>
                  </span>
                </span>
              </div>
              <p>
                Comprehensive EMaaS platform with CMMS integration, real-time
                monitoring, <br />
                sustainability reporting, and AI-powered field service
                management
              </p>
              <div className="grid-button flex gap20 items-center mb-50">
                <a href="#" className={`tf-button style-3"}`} data-demo-button>
                  <span>Book a Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
                <a href="#" className="tf-button style-2">
                  <span>Start Free Trial</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
              <div className="avatar-wrapper flex-wrap">
                <p className="w-full">
                  50+ Clients trust <span>EAMOT</span>
                </p>
                <div className="wg-list-avatar w-full">
                  {[...Array(8)].map((_, i) => (
                    <a key={i} href="#">
                      <Image
                        width={100}
                        height={100}
                        src={`/assets/images/home/clients/${i + 1}.jpg`}
                        alt={`Client ${i + 1}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-12">
            <div className="image relative w-full h-full">
              <div className="item-3" />
              <div className="item-4" />
              <Image
                src="/assets/images/home/1-1.jpg"
                alt="image"
                width={741}
                height={462}
                className="item-1"
              />
              <Image
                src="/assets/images/home/1-2.png"
                alt="image"
                width={558}
                height={800}
                className="item-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
