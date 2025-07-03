import React from "react";
import { render, screen } from "@testing-library/react";
import Home2Page from "@/app/(homes)/home-2/page";

// Mock all the imported components
jest.mock("@/components/footers/Footer2", () => {
  return function MockFooter2() {
    return <div data-testid="footer-2">Footer 2</div>;
  };
});

jest.mock("@/components/headers/Header2", () => {
  return function MockHeader2() {
    return <div data-testid="header-2">Header 2</div>;
  };
});

jest.mock("@/components/homes/home-2/Banner", () => {
  return function MockBanner() {
    return <div data-testid="banner">Banner</div>;
  };
});

jest.mock("@/components/homes/home-2/Cta", () => {
  return function MockCta() {
    return <div data-testid="cta">Call to Action</div>;
  };
});

jest.mock("@/components/homes/home-2/Design", () => {
  return function MockDesign() {
    return <div data-testid="design">Design</div>;
  };
});

jest.mock("@/components/homes/home-2/Design2", () => {
  return function MockDesign2() {
    return <div data-testid="design2">Design 2</div>;
  };
});

jest.mock("@/components/homes/home-2/Features", () => {
  return function MockFeatures() {
    return <div data-testid="features">Features</div>;
  };
});

jest.mock("@/components/homes/home-2/EditorLanguages", () => {
  return function MockEditorLanguages() {
    return <div data-testid="editor-languages">Editor Languages</div>;
  };
});

jest.mock("@/components/homes/home-2/Faq", () => {
  return function MockFaq() {
    return <div data-testid="faq">FAQ</div>;
  };
});

jest.mock("@/components/homes/home-2/Partners", () => {
  return function MockPartners() {
    return <div data-testid="partners">Partners</div>;
  };
});

jest.mock("@/components/homes/home-2/Pricing", () => {
  return function MockPricing() {
    return <div data-testid="pricing">Pricing</div>;
  };
});

jest.mock("@/components/homes/home-2/Testimonials", () => {
  return function MockTestimonials() {
    return <div data-testid="testimonials">Testimonials</div>;
  };
});

jest.mock("@/components/homes/home-1/Service", () => {
  return function MockServices() {
    return <div data-testid="services">Services</div>;
  };
});

jest.mock("@/components/common/Mouse", () => {
  return function MockMouse() {
    return <div data-testid="mouse">Mouse</div>;
  };
});

jest.mock("@/components/common/ScrollTop", () => {
  return function MockScrollTop() {
    return <div data-testid="scroll-top">Scroll Top</div>;
  };
});

describe("Home2Page", () => {
  describe("Rendering", () => {
    it("renders all main components", () => {
      render(<Home2Page />);

      // Check that all main components are rendered
      expect(screen.getByTestId("header-2")).toBeInTheDocument();
      expect(screen.getByTestId("banner")).toBeInTheDocument();
      expect(screen.getByTestId("features")).toBeInTheDocument();
      expect(screen.getByTestId("design")).toBeInTheDocument();
      expect(screen.getByTestId("editor-languages")).toBeInTheDocument();
      expect(screen.getByTestId("design2")).toBeInTheDocument();
      expect(screen.getByTestId("pricing")).toBeInTheDocument();
      expect(screen.getByTestId("partners")).toBeInTheDocument();
      expect(screen.getByTestId("testimonials")).toBeInTheDocument();
      expect(screen.getByTestId("services")).toBeInTheDocument();
      expect(screen.getByTestId("faq")).toBeInTheDocument();
      expect(screen.getByTestId("cta")).toBeInTheDocument();
      expect(screen.getByTestId("footer-2")).toBeInTheDocument();
    });

    it("renders utility components", () => {
      render(<Home2Page />);

      expect(screen.getByTestId("mouse")).toBeInTheDocument();
      expect(screen.getByTestId("scroll-top")).toBeInTheDocument();
    });
  });

  describe("Structure and Layout", () => {
    it("has correct page structure with wrapper and page divs", () => {
      render(<Home2Page />);

      const wrapper = document.querySelector("#wrapper");
      const page = document.querySelector("#page");

      expect(wrapper).toBeInTheDocument();
      expect(page).toBeInTheDocument();
      expect(page).toHaveClass("home2");
    });

    it("has correct container classes", () => {
      render(<Home2Page />);

      const pageGreen = document.querySelector(".page-green");
      expect(pageGreen).toBeInTheDocument();
    });

    it("renders components in correct order", () => {
      render(<Home2Page />);

      const page = document.querySelector("#page");
      const children = Array.from(page.children);

      // Check that components are rendered in the expected order
      expect(children[0]).toHaveAttribute("data-testid", "header-2");
      expect(children[1]).toHaveAttribute("data-testid", "banner");
      expect(children[2]).toHaveAttribute("data-testid", "features");
      expect(children[3]).toHaveAttribute("data-testid", "design");
      expect(children[4]).toHaveAttribute("data-testid", "editor-languages");
      expect(children[5]).toHaveAttribute("data-testid", "design2");
      expect(children[6]).toHaveAttribute("data-testid", "pricing");
      expect(children[7]).toHaveAttribute("data-testid", "partners");
      expect(children[8]).toHaveAttribute("data-testid", "testimonials");
      expect(children[9]).toHaveAttribute("data-testid", "services");
      expect(children[10]).toHaveAttribute("data-testid", "faq");
      expect(children[11]).toHaveAttribute("data-testid", "cta");
      expect(children[12]).toHaveAttribute("data-testid", "footer-2");
    });
  });

  describe("Metadata", () => {
    it("exports correct metadata", () => {
      // Import the component to access its metadata
      const { metadata } = require("@/app/(homes)/home-2/page");

      expect(metadata).toEqual({
        title: "EAMOT - Maintainance Tech with EMaaS and CMMS",
        description: "EAMOT - EMaaS and CMMS",
      });
    });
  });

  describe("Component Integration", () => {
    it("renders all components without errors", () => {
      // This test ensures that all components can be rendered together
      expect(() => render(<Home2Page />)).not.toThrow();
    });

    it("maintains proper DOM hierarchy", () => {
      render(<Home2Page />);

      // Check that the page structure is maintained
      const pageGreen = document.querySelector(".page-green");
      const wrapper = pageGreen.querySelector("#wrapper");
      const page = wrapper.querySelector("#page");

      expect(pageGreen).toContainElement(wrapper);
      expect(wrapper).toContainElement(page);
      expect(page.children.length).toBe(13); // 13 main components
    });
  });

  describe("Accessibility", () => {
    it("has proper semantic structure", () => {
      render(<Home2Page />);

      // Check that the page has proper structure
      const wrapper = document.querySelector("#wrapper");
      const page = document.querySelector("#page");

      expect(wrapper).toBeInTheDocument();
      expect(page).toBeInTheDocument();
    });

    it("renders all components with proper test IDs", () => {
      render(<Home2Page />);

      const testIds = [
        "header-2",
        "banner",
        "features",
        "design",
        "editor-languages",
        "design2",
        "pricing",
        "partners",
        "testimonials",
        "services",
        "faq",
        "cta",
        "footer-2",
        "mouse",
        "scroll-top",
      ];

      testIds.forEach((testId) => {
        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });
    });
  });
});
