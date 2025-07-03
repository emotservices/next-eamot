import Home from "./(homes)/home-2/page";
export const metadata = {
  title:
    "EAMOT - Maintainance Tech with EMaaS and CMMS - Innovating in Energy Management",
  description:
    "We leverage the latest technologies, including IoT and AI, to provide real-time data and predictive analytics that enable smarter energy management.",
  openGraph: {
    title:
      "EAMOT - Maintainance Tech with EMaaS and CMMS - Innovating in Energy Management",
    description:
      "We leverage the latest technologies, including IoT and AI, to provide real-time data and predictive analytics that enable smarter energy management.",
    images: [
      {
        url: "/assets/images/share_image.jpg",
        width: 1200,
        height: 630,
        alt: "EAMOT Share Image",
      },
    ],
    type: "website",
  },
};
export default function page() {
  return (
    <>
      <Home />
    </>
  );
}
