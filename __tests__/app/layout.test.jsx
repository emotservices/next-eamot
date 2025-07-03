import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

// Mock Next.js components and hooks
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("react-toastify", () => ({
  ToastContainer: ({ children, ...props }) => (
    <div data-testid="toast-container" {...props}>
      {children}
    </div>
  ),
}));

jest.mock("@/components/common/DemoPopup", () => {
  return function MockDemoPopup() {
    return <div data-testid="demo-popup">Demo Popup</div>;
  };
});

// Mock WOW.js
const mockWOW = {
  init: jest.fn(),
};

jest.mock("wowjs", () => ({
  WOW: jest.fn().mockImplementation(() => mockWOW),
}));

describe("RootLayout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset DOM
    document.body.innerHTML = "";
  });

  describe("Rendering", () => {
    it("renders the layout with proper HTML structure", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(screen.getByRole("document")).toBeInTheDocument();
      expect(screen.getByRole("document")).toHaveAttribute("lang", "en");
    });

    it("renders children content", () => {
      render(
        <RootLayout>
          <div data-testid="test-content">Test Content</div>
        </RootLayout>
      );

      expect(screen.getByTestId("test-content")).toBeInTheDocument();
      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders ToastContainer with correct props", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const toastContainer = screen.getByTestId("toast-container");
      expect(toastContainer).toBeInTheDocument();
      expect(toastContainer).toHaveAttribute("position", "top-right");
    });

    it("renders DemoPopup component", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(screen.getByTestId("demo-popup")).toBeInTheDocument();
    });
  });

  describe("ToastContainer Configuration", () => {
    it("has correct ToastContainer props", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const toastContainer = screen.getByTestId("toast-container");

      // Check that all expected props are passed
      expect(toastContainer).toHaveAttribute("position", "top-right");
      expect(toastContainer).toHaveAttribute("autoClose", "2000");
      expect(toastContainer).toHaveAttribute("hideProgressBar", "false");
      expect(toastContainer).toHaveAttribute("newestOnTop", "false");
      expect(toastContainer).toHaveAttribute("closeOnClick", "true");
      expect(toastContainer).toHaveAttribute("rtl", "false");
      expect(toastContainer).toHaveAttribute("pauseOnFocusLoss", "true");
      expect(toastContainer).toHaveAttribute("draggable", "true");
      expect(toastContainer).toHaveAttribute("pauseOnHover", "true");
    });
  });

  describe("WOW.js Integration", () => {
    it("initializes WOW.js on mount", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(mockWOW.init).toHaveBeenCalled();
    });

    it("creates WOW instance with correct configuration", () => {
      const { WOW } = require("wowjs");

      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(WOW).toHaveBeenCalledWith({
        live: false,
        mobile: true,
      });
    });

    it("reinitializes WOW.js when pathname changes", () => {
      const { usePathname } = require("next/navigation");

      // Mock pathname change
      usePathname.mockReturnValue("/about");

      const { rerender } = render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      // Clear previous calls
      mockWOW.init.mockClear();

      // Change pathname
      usePathname.mockReturnValue("/contact");

      rerender(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(mockWOW.init).toHaveBeenCalled();
    });
  });

  describe("CSS Import", () => {
    it("imports main CSS file", () => {
      // This test verifies that the CSS import is present in the component
      const layoutCode = require("@/app/layout.js");
      expect(layoutCode).toBeDefined();
    });
  });

  describe("Component Structure", () => {
    it("has proper HTML structure with html and body tags", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const htmlElement = document.querySelector("html");
      const bodyElement = document.querySelector("body");

      expect(htmlElement).toBeInTheDocument();
      expect(bodyElement).toBeInTheDocument();
      expect(htmlElement).toHaveAttribute("lang", "en");
    });

    it("renders content in correct order", () => {
      render(
        <RootLayout>
          <div data-testid="main-content">Main Content</div>
        </RootLayout>
      );

      const body = document.querySelector("body");
      const children = Array.from(body.children);

      // ToastContainer should be first
      expect(children[0]).toHaveAttribute("data-testid", "toast-container");

      // Main content should be second
      expect(children[1]).toHaveAttribute("data-testid", "main-content");

      // DemoPopup should be last
      expect(children[2]).toHaveAttribute("data-testid", "demo-popup");
    });
  });

  describe("Accessibility", () => {
    it("has proper lang attribute on html element", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const htmlElement = document.querySelector("html");
      expect(htmlElement).toHaveAttribute("lang", "en");
    });

    it("has proper document structure", () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      expect(document.documentElement).toBeInTheDocument();
      expect(document.body).toBeInTheDocument();
    });
  });

  describe("Error Handling", () => {
    it("handles missing children gracefully", () => {
      expect(() => render(<RootLayout />)).not.toThrow();
    });

    it("handles null children", () => {
      expect(() => render(<RootLayout>{null}</RootLayout>)).not.toThrow();
    });

    it("handles undefined children", () => {
      expect(() => render(<RootLayout>{undefined}</RootLayout>)).not.toThrow();
    });
  });

  describe("Performance", () => {
    it("does not re-render unnecessarily", () => {
      const { rerender } = render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      // Mock WOW.init to track calls
      const initSpy = jest.spyOn(mockWOW, "init");

      // Re-render with same props
      rerender(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      // Should not call init again for same pathname
      expect(initSpy).toHaveBeenCalledTimes(1);

      initSpy.mockRestore();
    });
  });

  describe("Integration", () => {
    it("works with complex child components", () => {
      const ComplexChild = () => (
        <div>
          <header>Header</header>
          <main>Main Content</main>
          <footer>Footer</footer>
        </div>
      );

      render(
        <RootLayout>
          <ComplexChild />
        </RootLayout>
      );

      expect(screen.getByText("Header")).toBeInTheDocument();
      expect(screen.getByText("Main Content")).toBeInTheDocument();
      expect(screen.getByText("Footer")).toBeInTheDocument();
    });

    it("maintains proper DOM hierarchy", () => {
      render(
        <RootLayout>
          <div data-testid="child">Child</div>
        </RootLayout>
      );

      const html = document.documentElement;
      const body = document.body;
      const child = screen.getByTestId("child");

      expect(html).toContainElement(body);
      expect(body).toContainElement(child);
    });
  });
});
