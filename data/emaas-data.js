export const emaasModules = [
  {
    key: "monitoring",
    breadcrumbsTitle: "Monitoring",
    title: "Monitoring Module under EMaaS",
    description:
      "The Monitoring module delivers real-time, actionable insights into your energy infrastructure. It links all essential submodules for a comprehensive EMaaS and CMMS solution.",
    submodules: [
      { name: "EnergyDashboard", icon: "icon-chart-network" },
      { name: "Sensor Monitoring", icon: "icon-device" },
      { name: "System Health", icon: "icon-maintenance" },
      { name: "Real-Time Data", icon: "icon-chart-line" },
      { name: "Energy Assets", icon: "icon-toolbox" },
      { name: "AC Monitoring", icon: "icon-setting" },
      { name: "Solar Dashboard", icon: "icon-users" },
    ],
    faqs: [
      {
        title: "What is Monitoring in EMaaS?",
        content:
          "Monitoring in EMaaS provides real-time visibility into all your energy systems, enabling proactive management and optimization.",
      },
      {
        title: "How does real-time data help?",
        content:
          "Real-time data allows for immediate detection of anomalies, reducing downtime and improving efficiency.",
      },
      {
        title: "Can I monitor multiple assets?",
        content:
          "Yes, the Monitoring module supports multi-asset and multi-site monitoring from a unified dashboard.",
      },
    ],
    steps: [
      {
        title: "Connect Devices",
        description:
          "Integrate all your energy assets and sensors with the platform for seamless data collection.",
        image: "/assets/images/steps/monitoring-step-1.jpg",
      },
      {
        title: "Real-Time Data Collection",
        description:
          "Continuously gather and process data from all connected devices for up-to-date insights.",
        image: "/assets/images/steps/monitoring-step-2.jpg",
      },
      {
        title: "Analyze & Visualize",
        description:
          "Use dashboards and analytics tools to interpret the data and identify trends or issues.",
        image: "/assets/images/steps/monitoring-step-3.jpg",
      },
      {
        title: "Take Action",
        description:
          "Respond to alerts and optimize performance based on actionable insights from the system.",
        image: "/assets/images/steps/monitoring-step-4.jpg",
      },
    ],
  },
  {
    key: "analytics",
    breadcrumbsTitle: "Analytics",
    title: "Analytics Module under EMaaS",
    description:
      "The Analytics module provides deep insights into energy usage, performance, and trends, supporting data-driven decisions for EMaaS and CMMS.",
    submodules: [
      { name: "Usage Analytics", icon: "icon-bar-chart" },
      { name: "Energy Analytics", icon: "icon-line-chart" },
      { name: "Performance Insights", icon: "icon-trending-up" },
    ],
    faqs: [
      {
        title: "How does Analytics help optimize energy usage?",
        content:
          "Analytics identifies patterns and inefficiencies, enabling targeted improvements and cost savings.",
      },
      {
        title: "Can I generate custom reports?",
        content:
          "Yes, the Analytics module supports customizable reports for various metrics and KPIs.",
      },
      {
        title: "Is historical data available?",
        content:
          "You can access and analyze historical data to track progress and forecast future trends.",
      },
    ],
    steps: [
      {
        title: "Collect Data",
        description:
          "Gather data from all energy sources and systems for a comprehensive view.",
        image: "/assets/images/steps/analytics-step-1.jpg",
      },
      {
        title: "Process & Clean",
        description:
          "Ensure data quality and consistency for accurate analysis and reporting.",
        image: "/assets/images/steps/analytics-step-2.jpg",
      },
      {
        title: "Analyze Trends",
        description:
          "Use advanced analytics to uncover trends, anomalies, and opportunities.",
        image: "/assets/images/steps/analytics-step-3.jpg",
      },
      {
        title: "Report & Recommend",
        description:
          "Generate actionable reports and recommendations for improvement.",
        image: "/assets/images/steps/analytics-step-4.jpg",
      },
    ],
  },
  {
    key: "diagnostics",
    breadcrumbsTitle: "Diagnostics",
    title: "Diagnostics Module under EMaaS",
    description:
      "The Diagnostics module enables proactive fault detection, event tracking, and system log analysis for robust EMaaS and CMMS operations.",
    submodules: [
      { name: "Fault Detection", icon: "AlertTriangle" },
      { name: "System Logs", icon: "FileText" },
      { name: "Event Tracking", icon: "ListChecks" },
      { name: "Bill Dashboard", icon: "Receipt" },
    ],
    faqs: [
      {
        title: "What is Fault Detection?",
        content:
          "Fault Detection identifies and alerts you to issues in your energy systems before they escalate.",
      },
      {
        title: "How are system logs used?",
        content:
          "System logs provide a detailed record of all events and actions, aiding in troubleshooting and compliance.",
      },
      {
        title: "Can I track events in real time?",
        content:
          "Yes, the module supports real-time event tracking and instant notifications.",
      },
    ],
    steps: [
      {
        title: "Monitor Systems",
        description:
          "Continuously monitor all systems for faults and irregularities.",
        image: "/assets/images/steps/diagnostics-step-1.jpg",
      },
      {
        title: "Log Events",
        description:
          "Automatically log all system events for transparency and analysis.",
        image: "/assets/images/steps/diagnostics-step-2.jpg",
      },
      {
        title: "Detect Faults",
        description:
          "Identify faults early using intelligent algorithms and alerts.",
        image: "/assets/images/steps/diagnostics-step-3.jpg",
      },
      {
        title: "Resolve & Report",
        description:
          "Quickly resolve issues and generate diagnostic reports for review.",
        image: "/assets/images/steps/diagnostics-step-4.jpg",
      },
    ],
  },
  {
    key: "maintenance",
    breadcrumbsTitle: "Maintenance",
    title: "Maintenance Module under EMaaS",
    description:
      "The Maintenance module streamlines preventive and breakdown maintenance, parts replacement, and virtual audits for EMaaS and CMMS.",
    submodules: [
      { name: "Preventive Maintenance", icon: "Wrench" },
      { name: "Breakdown Records", icon: "AlertCircle" },
      { name: "Parts Replacement", icon: "Package" },
      { name: "Virtual Energy Audit", icon: "ClipboardCheck" },
    ],
    faqs: [
      {
        title: "What is Preventive Maintenance?",
        content:
          "Preventive Maintenance schedules regular checks to avoid unexpected breakdowns and extend asset life.",
      },
      {
        title: "How are breakdowns recorded?",
        content:
          "All breakdowns are logged with details for analysis and future prevention.",
      },
      {
        title: "What is a Virtual Energy Audit?",
        content:
          "A Virtual Energy Audit remotely assesses your energy systems for efficiency and compliance.",
      },
    ],
    steps: [
      {
        title: "Schedule Maintenance",
        description:
          "Plan and automate regular maintenance tasks for all assets.",
        image: "/assets/images/steps/maintenance-step-1.jpg",
      },
      {
        title: "Record Breakdowns",
        description:
          "Log all breakdowns and repairs for future reference and analysis.",
        image: "/assets/images/steps/maintenance-step-2.jpg",
      },
      {
        title: "Replace Parts",
        description:
          "Track and manage parts replacement to ensure system reliability.",
        image: "/assets/images/steps/maintenance-step-3.jpg",
      },
      {
        title: "Audit & Improve",
        description:
          "Conduct virtual audits and implement improvements for optimal performance.",
        image: "/assets/images/steps/maintenance-step-4.jpg",
      },
    ],
  },
  {
    key: "compliance",
    breadcrumbsTitle: "Compliance",
    title: "Compliance Module under EMaaS",
    description:
      "The Compliance module ensures regulatory adherence, audit trails, and safety compliance for EMaaS and CMMS.",
    submodules: [
      { name: "Electrical Inspectorate", icon: "Zap" },
      { name: "Audit Trails", icon: "History" },
      { name: "Fire Safety Audit", icon: "Flame" },
      { name: "CAQM Compliance", icon: "Cloud" },
    ],
    faqs: [
      {
        title: "What is Compliance in EMaaS?",
        content:
          "Compliance ensures your operations meet all regulatory and safety standards.",
      },
      {
        title: "How are audit trails maintained?",
        content:
          "All actions and changes are logged for transparency and regulatory review.",
      },
      {
        title: "What is CAQM Compliance?",
        content:
          "CAQM Compliance refers to adherence to air quality management standards and regulations.",
      },
    ],
    steps: [
      {
        title: "Review Regulations",
        description:
          "Stay updated with the latest regulations and compliance requirements.",
        image: "/assets/images/steps/compliance-step-1.jpg",
      },
      {
        title: "Maintain Audit Trails",
        description:
          "Log all activities and changes for easy auditing and reporting.",
        image: "/assets/images/steps/compliance-step-2.jpg",
      },
      {
        title: "Conduct Safety Audits",
        description:
          "Regularly audit systems for fire safety and other compliance needs.",
        image: "/assets/images/steps/compliance-step-3.jpg",
      },
      {
        title: "Achieve Certification",
        description:
          "Ensure all compliance certifications are up to date and documented.",
        image: "/assets/images/steps/compliance-step-4.jpg",
      },
    ],
  },
  {
    key: "reporting",
    breadcrumbsTitle: "Sustainability Reporting",
    title: "Sustainability Reporting Module under EMaaS",
    description:
      "The Sustainability Reporting module provides comprehensive reporting tools for budget, emissions, SDG, BRSR, and ESG, supporting EMaaS and CMMS.",
    submodules: [
      {
        name: "Budget Forecast",
        icon: "/assets/icons/reporting/budget-forecast.svg",
      },
      { name: "SDG", icon: "/assets/icons/reporting/sdg.svg" },
      {
        name: "Emission Reports",
        icon: "/assets/icons/reporting/emission-reports.svg",
      },
      {
        name: "BRSR Reports",
        icon: "/assets/icons/reporting/brsr-reports.svg",
      },
      {
        name: "ESG Dashboard",
        icon: "/assets/icons/reporting/esg-dashboard.svg",
      },
    ],
    faqs: [
      {
        title: "What is Sustainability Reporting?",
        content:
          "Sustainability Reporting tracks and reports on your organization's environmental and social impact.",
      },
      {
        title: "What are SDGs?",
        content:
          "SDGs are Sustainable Development Goals set by the United Nations to promote global sustainability.",
      },
      {
        title: "What is a BRSR Report?",
        content:
          "BRSR (Business Responsibility and Sustainability Report) is a regulatory requirement for sustainability disclosures.",
      },
    ],
    steps: [
      {
        title: "Collect Data",
        description:
          "Gather all relevant data for sustainability and compliance reporting.",
        image: "/assets/images/steps/reporting-step-1.jpg",
      },
      {
        title: "Analyze Impact",
        description:
          "Assess your organization's environmental and social impact using analytics tools.",
        image: "/assets/images/steps/reporting-step-2.jpg",
      },
      {
        title: "Generate Reports",
        description:
          "Create detailed reports for SDG, BRSR, ESG, and other requirements.",
        image: "/assets/images/steps/reporting-step-3.jpg",
      },
      {
        title: "Share & Improve",
        description:
          "Distribute reports to stakeholders and implement improvements based on findings.",
        image: "/assets/images/steps/reporting-step-4.jpg",
      },
    ],
  },
];
