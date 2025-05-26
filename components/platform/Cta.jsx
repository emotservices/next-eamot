import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="platform-cta py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Asset Management?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join leading enterprises that trust our platform for their energy
              management, maintenance, and field service operations
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="tf-button style-2 bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/pricing"
                className="tf-button style-2 bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
