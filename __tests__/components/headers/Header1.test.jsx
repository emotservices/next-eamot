import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header1 from "@/components/headers/Header1";

// Mock Next.js components
jest.mock("next/link", () => {
  return ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

jest.mock("next/image", () => {
  return ({ src, alt, width, height, ...props }) => {
    return <img src={src} alt={alt} width={width} height={height} {...props} />;
  };
});

// Mock the Nav and MobileNav components
jest.mock("@/components/headers/Nav", () => {
  return function MockNav() {
    return <div data-testid="nav-component">Navigation Menu</div>;
  };
});

jest.mock("@/components/headers/MobileNav", () => {
  return function MockMobileNav() {
    return <div data-testid="mobile-nav-component">Mobile Navigation</div>;
  };
});

describe("Header1", () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });
  });

  describe("Rendering", () => {
    it("renders the header with logo", () => {
      render(<Header1 />);

      expect(screen.getByAltText("image")).toBeInTheDocument();
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("renders navigation components", () => {
      render(<Header1 />);

      expect(screen.getByTestId("nav-component")).toBeInTheDocument();
      expect(screen.getByTestId("mobile-nav-component")).toBeInTheDocument();
    });

    it("renders sign in and get started buttons", () => {
      render(<Header1 />);

      expect(screen.getByText("Sign In")).toBeInTheDocument();
      expect(screen.getByText("Get Started")).toBeInTheDocument();
    });

    it("renders search functionality", () => {
      render(<Header1 />);

      expect(
        screen.getByRole("button", { name: /search/i })
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    it("renders mobile menu button", () => {
      render(<Header1 />);

      const mobileButton = document.querySelector(".mobile-button");
      expect(mobileButton).toBeInTheDocument();
    });
  });

  describe("Scroll Behavior", () => {
    it("applies is-fixed class when scrolled more than 70px", () => {
      render(<Header1 />);

      const header = screen.getByRole("banner");

      // Initially should not have is-fixed class
      expect(header).not.toHaveClass("is-fixed");

      // Simulate scroll
      Object.defineProperty(window, "scrollY", {
        value: 80,
        writable: true,
      });

      fireEvent.scroll(window);

      // Should now have is-fixed class
      expect(header).toHaveClass("is-fixed");
    });

    it("applies is-small class when scrolled more than 100px", () => {
      render(<Header1 />);

      const header = screen.getByRole("banner");

      // Initially should not have is-small class
      expect(header).not.toHaveClass("is-small");

      // Simulate scroll
      Object.defineProperty(window, "scrollY", {
        value: 120,
        writable: true,
      });

      fireEvent.scroll(window);

      // Should now have is-small class
      expect(header).toHaveClass("is-small");
    });

    it("removes classes when scrolled back to top", () => {
      render(<Header1 />);

      const header = screen.getByRole("banner");

      // First scroll down
      Object.defineProperty(window, "scrollY", {
        value: 120,
        writable: true,
      });
      fireEvent.scroll(window);

      expect(header).toHaveClass("is-fixed", "is-small");

      // Then scroll back to top
      Object.defineProperty(window, "scrollY", {
        value: 0,
        writable: true,
      });
      fireEvent.scroll(window);

      expect(header).not.toHaveClass("is-fixed", "is-small");
    });
  });

  describe("Search Functionality", () => {
    it("toggles search active state when search button is clicked", async () => {
      const user = userEvent.setup();
      render(<Header1 />);

      const searchButton = screen.getByRole("button", { name: /search/i });
      const searchContainer = document.querySelector(".top-search");

      // Initially search should not be active
      expect(searchContainer).not.toHaveClass("active");

      // Click search button
      await user.click(searchButton);

      // Search should now be active
      expect(searchContainer).toHaveClass("active");

      // Click again to deactivate
      await user.click(searchButton);

      // Search should not be active again
      expect(searchContainer).not.toHaveClass("active");
    });

    it("prevents form submission on search form", async () => {
      const user = userEvent.setup();
      const preventDefault = jest.fn();

      render(<Header1 />);

      const searchInput = screen.getByPlaceholderText("Search...");
      const searchForm = searchInput.closest("form");

      // Simulate form submission
      fireEvent.submit(searchForm, { preventDefault });

      expect(preventDefault).toHaveBeenCalled();
    });
  });

  describe("Mobile Menu", () => {
    it("opens mobile menu when mobile button is clicked", async () => {
      const user = userEvent.setup();
      render(<Header1 />);

      const mobileButton = document.querySelector(".mobile-button");
      const mobileNavWrap = document.querySelector(".mobile-nav-wrap");

      // Initially mobile menu should not be active
      expect(mobileNavWrap).not.toHaveClass("active");

      // Click mobile button
      await user.click(mobileButton);

      // Mobile menu should now be active
      expect(mobileNavWrap).toHaveClass("active");
    });

    it("closes mobile menu when overlay is clicked", async () => {
      const user = userEvent.setup();
      render(<Header1 />);

      const mobileButton = document.querySelector(".mobile-button");
      const overlay = document.querySelector(".overlay-mobile-nav");
      const mobileNavWrap = document.querySelector(".mobile-nav-wrap");

      // Open mobile menu first
      await user.click(mobileButton);
      expect(mobileNavWrap).toHaveClass("active");

      // Click overlay to close
      await user.click(overlay);

      // Mobile menu should be closed
      expect(mobileNavWrap).not.toHaveClass("active");
    });

    it("closes mobile menu when close button is clicked", async () => {
      const user = userEvent.setup();
      render(<Header1 />);

      const mobileButton = document.querySelector(".mobile-button");
      const closeButton = document.querySelector(".mobile-nav-close");
      const mobileNavWrap = document.querySelector(".mobile-nav-wrap");

      // Open mobile menu first
      await user.click(mobileButton);
      expect(mobileNavWrap).toHaveClass("active");

      // Click close button
      await user.click(closeButton);

      // Mobile menu should be closed
      expect(mobileNavWrap).not.toHaveClass("active");
    });
  });

  describe("Links and Navigation", () => {
    it("has correct href for logo link", () => {
      render(<Header1 />);

      const logoLink = screen.getByAltText("image").closest("a");
      expect(logoLink).toHaveAttribute("href", "/");
    });

    it("has correct href for sign in link", () => {
      render(<Header1 />);

      const signInLink = screen.getByText("Sign In");
      expect(signInLink).toHaveAttribute("href", "/contact-us");
    });

    it("has correct href for get started link", () => {
      render(<Header1 />);

      const getStartedLink = screen.getByText("Get Started");
      expect(getStartedLink).toHaveAttribute("href", "/contact-us");
    });

    it("has correct href for mobile logo link", () => {
      render(<Header1 />);

      const mobileLogos = screen.getAllByAltText("image");
      const mobileLogoLink = mobileLogos[1].closest("a"); // Second logo is mobile logo
      expect(mobileLogoLink).toHaveAttribute("href", "/");
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes on search input", () => {
      render(<Header1 />);

      const searchInput = screen.getByPlaceholderText("Search...");
      expect(searchInput).toHaveAttribute("aria-required", "true");
      expect(searchInput).toHaveAttribute("required");
      expect(searchInput).toHaveAttribute("tabIndex", "2");
    });

    it("has proper semantic structure", () => {
      render(<Header1 />);

      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.getByRole("search")).toBeInTheDocument();
    });

    it("has proper form structure for search", () => {
      render(<Header1 />);

      const searchForm = screen.getByRole("search");
      const searchInput = screen.getByPlaceholderText("Search...");

      expect(searchForm).toContainElement(searchInput);
    });
  });

  describe("Styling Classes", () => {
    it("applies correct base classes to header", () => {
      render(<Header1 />);

      const header = screen.getByRole("banner");
      expect(header).toHaveClass("header", "header-fixed", "style-absolute");
    });

    it("applies correct classes to search container", () => {
      render(<Header1 />);

      const searchContainer = document.querySelector(".top-search");
      expect(searchContainer).toBeInTheDocument();
    });

    it("applies correct classes to mobile navigation", () => {
      render(<Header1 />);

      const mobileNavWrap = document.querySelector(".mobile-nav-wrap");
      expect(mobileNavWrap).toBeInTheDocument();
    });
  });
});
