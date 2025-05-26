import React from "react";

const Features = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description:
        "Monitor your assets and energy consumption in real-time with advanced analytics and reporting",
      icon: "📊",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Leverage AI and machine learning to predict maintenance needs and prevent downtime",
      icon: "🤖",
    },
    {
      title: "Mobile First",
      description:
        "Access your platform anywhere, anytime with our mobile-first approach",
      icon: "📱",
    },
    {
      title: "Integration Ready",
      description:
        "Seamlessly integrate with your existing systems and third-party applications",
      icon: "🔄",
    },
    {
      title: "Customizable Workflows",
      description:
        "Tailor the platform to your specific business needs with customizable workflows",
      icon: "⚙️",
    },
    {
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with comprehensive analytics and reporting tools",
      icon: "📈",
    },
  ];

  return (
    <section className="platform-features py-20 bg-gray-50">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our platform the ideal
              solution for enterprise asset management
            </p>
          </div>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-8">
              <div className="feature-card bg-white rounded-lg p-8 h-full hover:shadow-lg transition-shadow">
                <div className="icon-container mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
