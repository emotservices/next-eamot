import React from "react";

export default function Map() {
  return (
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.049964964357!2d77.6357202!3d12.9741452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI3LjAiTiA3N8KwMzgnMDguNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
      width="100%"
      height={724}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
