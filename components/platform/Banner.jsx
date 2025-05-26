import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="platform-banner py-20">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Asset Management Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for energy management, maintenance, and
              field service operations
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-8">
            <div className="product-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="icon-container mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">EMaaS</h3>
              <p className="text-lg text-gray-600 mb-2">
                Energy Manager as a Service
              </p>
              <p className="text-gray-600 mb-6">
                Real-time monitoring and analytics for optimal energy management
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Real-time energy monitoring
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Predictive maintenance
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Energy optimization
                </li>
              </ul>
              <Link
                href="/platform/emaas"
                className="tf-button style-2 w-full text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="col-md-4 mb-8">
            <div className="product-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="icon-container mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">CMMS</h3>
              <p className="text-lg text-gray-600 mb-2">Maintenance Platform</p>
              <p className="text-gray-600 mb-6">
                Comprehensive maintenance management for efficient operations
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Work order management
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Asset tracking
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Preventive maintenance
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Inventory management
                </li>
              </ul>
              <Link
                href="/platform/cmms"
                className="tf-button style-2 w-full text-center"
              >
                Explore CMMS
              </Link>
            </div>
          </div>

          <div className="col-md-4 mb-8">
            <div className="product-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="icon-container mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Field Service</h3>
              <p className="text-lg text-gray-600 mb-2">Mobile App Solution</p>
              <p className="text-gray-600 mb-6">
                Streamline field operations with our mobile-first approach
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mobile work orders
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Real-time updates
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Offline capabilities
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Field team management
                </li>
              </ul>
              <Link
                href="/platform/field-service"
                className="tf-button style-2 w-full text-center"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
