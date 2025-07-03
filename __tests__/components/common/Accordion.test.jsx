import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "@/components/common/Accordion";
import { faqs } from "@/data/faq";

// Mock the data
jest.mock("@/data/faq", () => ({
  faqs: [
    {
      id: 1,
      title: "What is EMaaS and how does it benefit my business?",
      content:
        "EMaaS (Energy Manager as a Service) provides real-time monitoring, advanced analytics, and predictive maintenance to optimize asset performance and reduce downtime.",
      active: true,
    },
    {
      id: 2,
      title: "How does CMMS improve maintenance efficiency?",
      content:
        "CMMS (Computerized Maintenance Management System) streamlines maintenance operations by automating work orders, scheduling preventive maintenance, and tracking asset history.",
      active: false,
    },
    {
      id: 3,
      title: "What features does the Field Service App offer?",
      content:
        "Our Field Service App enables mobile work orders, real-time updates, offline capability, and team collaboration to enhance field service operations.",
      active: false,
    },
  ],
}));

describe("Accordion", () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = "";
  });

  describe("Rendering", () => {
    it("renders all FAQ items from default data", () => {
      render(<Accordion />);

      expect(
        screen.getByText("What is EMaaS and how does it benefit my business?")
      ).toBeInTheDocument();
      expect(
        screen.getByText("How does CMMS improve maintenance efficiency?")
      ).toBeInTheDocument();
      expect(
        screen.getByText("What features does the Field Service App offer?")
      ).toBeInTheDocument();
    });

    it("renders custom FAQ data when provided", () => {
      const customFaqs = [
        {
          id: 1,
          title: "Custom Question 1",
          content: "Custom Answer 1",
          active: false,
        },
        {
          id: 2,
          title: "Custom Question 2",
          content: "Custom Answer 2",
          active: false,
        },
      ];

      render(<Accordion faqData={customFaqs} />);

      expect(screen.getByText("Custom Question 1")).toBeInTheDocument();
      expect(screen.getByText("Custom Answer 1")).toBeInTheDocument();
      expect(screen.getByText("Custom Question 2")).toBeInTheDocument();
      expect(screen.getByText("Custom Answer 2")).toBeInTheDocument();
    });

    it("applies custom toggle class when provided", () => {
      render(<Accordion toggleClass="custom-toggle" />);

      const accordionItems = document.querySelectorAll(".custom-toggle");
      expect(accordionItems.length).toBeGreaterThan(0);
    });

    it("renders with default flat-toggle class when no custom class provided", () => {
      render(<Accordion />);

      const accordionItems = document.querySelectorAll(".flat-toggle");
      expect(accordionItems.length).toBeGreaterThan(0);
    });
  });

  describe("Interaction", () => {
    it("expands first item by default (currentIndex = 0)", () => {
      render(<Accordion />);

      const firstItem = screen
        .getByText("What is EMaaS and how does it benefit my business?")
        .closest(".flat-toggle");
      expect(firstItem).toHaveClass("active");
    });

    it("toggles accordion item when clicked", async () => {
      const user = userEvent.setup();
      render(<Accordion />);

      const secondItem = screen.getByText(
        "How does CMMS improve maintenance efficiency?"
      );
      const secondItemContainer = secondItem.closest(".flat-toggle");

      // Initially, second item should not be active
      expect(secondItemContainer).not.toHaveClass("active");

      // Click on second item
      await user.click(secondItemContainer);

      // Second item should now be active
      expect(secondItemContainer).toHaveClass("active");
    });

    it("collapses item when clicked again", async () => {
      const user = userEvent.setup();
      render(<Accordion />);

      const firstItem = screen.getByText(
        "What is EMaaS and how does it benefit my business?"
      );
      const firstItemContainer = firstItem.closest(".flat-toggle");

      // Initially, first item should be active
      expect(firstItemContainer).toHaveClass("active");

      // Click on first item to collapse it
      await user.click(firstItemContainer);

      // First item should no longer be active
      expect(firstItemContainer).not.toHaveClass("active");
    });

    it("expands only one item at a time", async () => {
      const user = userEvent.setup();
      render(<Accordion />);

      const firstItem = screen.getByText(
        "What is EMaaS and how does it benefit my business?"
      );
      const secondItem = screen.getByText(
        "How does CMMS improve maintenance efficiency?"
      );
      const thirdItem = screen.getByText(
        "What features does the Field Service App offer?"
      );

      const firstItemContainer = firstItem.closest(".flat-toggle");
      const secondItemContainer = secondItem.closest(".flat-toggle");
      const thirdItemContainer = thirdItem.closest(".flat-toggle");

      // Initially, first item should be active
      expect(firstItemContainer).toHaveClass("active");
      expect(secondItemContainer).not.toHaveClass("active");
      expect(thirdItemContainer).not.toHaveClass("active");

      // Click on second item
      await user.click(secondItemContainer);

      // Second item should be active, others should not
      expect(firstItemContainer).not.toHaveClass("active");
      expect(secondItemContainer).toHaveClass("active");
      expect(thirdItemContainer).not.toHaveClass("active");

      // Click on third item
      await user.click(thirdItemContainer);

      // Third item should be active, others should not
      expect(firstItemContainer).not.toHaveClass("active");
      expect(secondItemContainer).not.toHaveClass("active");
      expect(thirdItemContainer).toHaveClass("active");
    });
  });

  describe("Content Display", () => {
    it("displays content for active item", () => {
      render(<Accordion />);

      expect(
        screen.getByText(
          "EMaaS (Energy Manager as a Service) provides real-time monitoring, advanced analytics, and predictive maintenance to optimize asset performance and reduce downtime."
        )
      ).toBeInTheDocument();
    });

    it("hides content for inactive items initially", () => {
      render(<Accordion />);

      // Second item content should not be visible initially
      expect(
        screen.queryByText(
          "CMMS (Computerized Maintenance Management System) streamlines maintenance operations by automating work orders, scheduling preventive maintenance, and tracking asset history."
        )
      ).not.toBeInTheDocument();
    });

    it("shows content when item is expanded", async () => {
      const user = userEvent.setup();
      render(<Accordion />);

      const secondItem = screen.getByText(
        "How does CMMS improve maintenance efficiency?"
      );
      const secondItemContainer = secondItem.closest(".flat-toggle");

      // Click on second item to expand it
      await user.click(secondItemContainer);

      // Content should now be visible
      expect(
        screen.getByText(
          "CMMS (Computerized Maintenance Management System) streamlines maintenance operations by automating work orders, scheduling preventive maintenance, and tracking asset history."
        )
      ).toBeInTheDocument();
    });
  });

  describe("Styling and Classes", () => {
    it("applies wow fadeInUp class to all items", () => {
      render(<Accordion />);

      const accordionItems = document.querySelectorAll(".wow.fadeInUp");
      expect(accordionItems.length).toBeGreaterThan(0);
    });

    it("applies active class to current item", () => {
      render(<Accordion />);

      const activeItems = document.querySelectorAll(".flat-toggle.active");
      expect(activeItems.length).toBe(1);
    });

    it("applies toggle-title and toggle-content classes", () => {
      render(<Accordion />);

      const titles = document.querySelectorAll(".toggle-title");
      const contents = document.querySelectorAll(".toggle-content");

      expect(titles.length).toBeGreaterThan(0);
      expect(contents.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    it("has clickable elements with proper cursor styling", () => {
      render(<Accordion />);

      const accordionItems = document.querySelectorAll(".flat-toggle");
      accordionItems.forEach((item) => {
        expect(item).toHaveStyle("cursor: pointer");
      });
    });

    it("renders content in proper semantic structure", () => {
      render(<Accordion />);

      const headings = document.querySelectorAll("h4");
      const paragraphs = document.querySelectorAll("p");

      expect(headings.length).toBeGreaterThan(0);
      expect(paragraphs.length).toBeGreaterThan(0);
    });
  });
});
