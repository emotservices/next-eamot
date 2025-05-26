import React from "react";
import Image from "next/image";
export default function Steps({ steps, sectionTitle }) {
  // Fallback demo steps if not provided
  const demoSteps = [
    {
      title: "Enter your post's title and keyword",
      description:
        "Must explain want all this mistaken see denouncing pleasure & praising",
      image: "/assets/images/steps/step-01.jpg",
    },
    {
      title: "Review your outline & main talking points",
      description:
        "Must explain want all this mistaken see denouncing pleasure & praising",
      image: "/assets/images/steps/step-02.jpg",
    },
    {
      title: "Generate your first draft",
      description:
        "Must explain want all this mistaken see denouncing pleasure & praising",
      image: "/assets/images/steps/step-03.jpg",
    },
    {
      title: "Edit, polish, & Share your post",
      description:
        "Must explain want all this mistaken see denouncing pleasure & praising",
      image: "/assets/images/steps/step-04.jpg",
    },
  ];
  const stepsToShow = steps || demoSteps;
  return (
    <div className="wg-steps pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Working Process</h6>
              <div className="main-title">
                {sectionTitle || "Create Engaging Social Media Content"}{" "}
                <span className="animation-text">in 4 Steps</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            {stepsToShow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`step-item item${idx + 1} ${
                    idx % 2 === 1 ? "row-reverse" : ""
                  }`}
                >
                  <div className="image wow fadeInUp">
                    <Image
                      src={step.image}
                      width={440}
                      height={316}
                      alt="step"
                    />
                  </div>
                  <div className="content">
                    <div className="number">{idx + 1}</div>
                    <div className="title">
                      <a href="#">{step.title}</a>
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
                {idx < stepsToShow.length - 1 && (
                  <div className="line text-center">
                    <svg
                      width={516}
                      height={178}
                      viewBox="0 0 516 178"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          idx % 2 === 0
                            ? "M1 1C3.36783 47.9774 3.36783 100.248 142.731 97.9323C227.285 96.5273 326.746 95.6165 427.209 95.6165C507.58 95.6165 518.652 149.872 514.142 177"
                            : "M515 1C512.632 47.9774 512.632 100.248 373.269 97.9323C288.715 96.5273 189.254 95.6165 88.7908 95.6165C8.41995 95.6165 -2.65246 149.872 1.85769 177"
                        }
                        stroke="#6844ED"
                        strokeOpacity="0.5"
                        strokeWidth={2}
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
