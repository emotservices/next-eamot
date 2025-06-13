"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function VideoSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="wg-videos">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="videos-inner">
                <Image
                  className="img-01 wow fadeInUp"
                  data-wow-delay="0.1s"
                  src="/assets/images/about/3.png"
                  alt="image"
                  width={310}
                  height={470}
                />
                <div className="video-wrap style-2 wow fadeInUp">
                  <Image
                    src="/assets/images/about/2.png"
                    width={553}
                    height={483}
                    alt="image"
                  />
                  <a onClick={() => setOpen(true)} className="popup-youtube">
                    <div className="icon">
                      <i className="icon-play" />
                    </div>
                  </a>
                </div>
                <Image
                  className="img-03 wow fadeInUp"
                  data-wow-delay="0.1s"
                  src="/assets/images/about/4.jpg"
                  width={202}
                  height={376}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="8we7XJ4i7xk"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
