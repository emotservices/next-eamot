"use client";
import { useState, useEffect } from "react";
import RequestDemoForm from "./RequestDemoForm";

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      // Check if the clicked element or any of its parents has the data-demo-button attribute
      let element = e.target;
      while (element) {
        if (element.hasAttribute("data-demo-button")) {
          setIsOpen(true);
          break;
        }
        element = element.parentElement;
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="demo-popup-overlay">
      <div className="demo-popup">
        <RequestDemoForm isPopup={true} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
