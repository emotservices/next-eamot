export const menuItems = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Platform",
    url: "/platform",
  },
  {
    id: 3,
    text: "EMaaS",
    url: "#",
    subMenu: [
      { text: "Monitoring", url: "/emaas/monitoring" },
      { text: "Analytics", url: "/emaas/analytics" },
      { text: "Diagnostics", url: "/emaas/diagnostics" },
      { text: "Maintenance", url: "/emaas/maintenance" },
      { text: "Compliance", url: "/emaas/compliance" },
      {
        text: "Sustainability Reporting",
        url: "/emaas/sustainability-reporting",
      },
    ],
    hasChildren: true,
  },
  {
    id: 4,
    text: "About Us",
    url: "/about",
    hasChildren: false,
  },
  {
    id: 5,
    text: "Blogs",
    url: "/blog",
  },
  {
    id: 6,
    text: "Insights",
    url: "/insights",
  },
  {
    id: 7,
    text: "Contact Us",
    url: "/contact-us",
  },
];
