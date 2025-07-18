"use client";
import Image from "next/image";
import { partners } from "@/data/partners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Partners() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 123,
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
    <div className="wg-partners-2">
      <div className="themesflat-container full">
        <div className="row">
          <div className="col-12">
            <h5>Trusted by 50+ Companies across the India</h5>
            <div className="wrap">
              <Swiper
                {...swiperOptions}
                className="swiper-container  grid-languages  e-resize"
                data-swiper=""
              >
                {partners.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide my-auto">
                    <Image
                      src={elm.src}
                      width={200}
                      height={60}
                      style={{ objectFit: "contain" }}
                      alt="image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="info">
              <div className="text">PAN India Presence</div>
              <div className="text">Energy Transistion &amp; Projects</div>
              <div className="text">Data Backed Decisions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
