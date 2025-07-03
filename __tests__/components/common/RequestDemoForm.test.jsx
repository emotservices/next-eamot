import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RequestDemoForm from "@/components/common/RequestDemoForm";

describe("RequestDemoForm", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders the form with all required fields", () => {
      render(<RequestDemoForm />);

      expect(screen.getByText("Get Started with EAMOT")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Full Name *")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Company Name *")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Work Email *")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Phone Number *")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Select Module *")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /submit request/i })
      ).toBeInTheDocument();
    });

    it("renders popup version with close button when isPopup is true", () => {
      render(<RequestDemoForm isPopup={true} onClose={mockOnClose} />);

      expect(screen.getByText("Request a Demo")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });

    it("renders all module options in the select dropdown", () => {
      render(<RequestDemoForm />);

      const moduleSelect = screen.getByDisplayValue("Select Module *");
      fireEvent.click(moduleSelect);

      const expectedModules = [
        "Asset Management",
        "Preventive Maintenance",
        "Predictive Maintenance",
        "Work Order Management",
        "Inventory Management",
        "Equipment Monitoring",
        "Compliance & Safety",
        "Energy Management",
        "Sustainability",
        "Maintenance Analytics",
      ];

      expectedModules.forEach((module) => {
        expect(screen.getByText(module)).toBeInTheDocument();
      });
    });
  });

  describe("Form Interactions", () => {
    it("updates form fields when user types", async () => {
      const user = userEvent.setup();
      render(<RequestDemoForm />);

      const nameInput = screen.getByPlaceholderText("Full Name *");
      const emailInput = screen.getByPlaceholderText("Work Email *");

      await user.type(nameInput, "John Doe");
      await user.type(emailInput, "john@example.com");

      expect(nameInput).toHaveValue("John Doe");
      expect(emailInput).toHaveValue("john@example.com");
    });

    it("allows user to select a module from dropdown", async () => {
      const user = userEvent.setup();
      render(<RequestDemoForm />);

      const moduleSelect = screen.getByDisplayValue("Select Module *");
      await user.click(moduleSelect);

      const assetManagementOption = screen.getByText("Asset Management");
      await user.click(assetManagementOption);

      expect(moduleSelect).toHaveValue("Asset Management");
    });

    it("validates required fields on form submission", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      render(<RequestDemoForm />);

      const submitButton = screen.getByRole("button", {
        name: /submit request/i,
      });
      await user.click(submitButton);

      // Form should not submit and should show validation errors
      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  describe("Form Submission", () => {
    it("submits form with valid data", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      render(<RequestDemoForm />);

      // Fill out the form
      await user.type(screen.getByPlaceholderText("Full Name *"), "John Doe");
      await user.type(
        screen.getByPlaceholderText("Company Name *"),
        "Test Company"
      );
      await user.type(
        screen.getByPlaceholderText("Work Email *"),
        "john@example.com"
      );
      await user.type(
        screen.getByPlaceholderText("Phone Number *"),
        "1234567890"
      );

      // Select a module
      const moduleSelect = screen.getByDisplayValue("Select Module *");
      await user.click(moduleSelect);
      await user.click(screen.getByText("Asset Management"));

      // Submit the form
      const submitButton = screen.getByRole("button", {
        name: /submit request/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
          name: "John Doe",
          company: "Test Company",
          email: "john@example.com",
          phone: "1234567890",
          module: "Asset Management",
        });
      });

      consoleSpy.mockRestore();
    });

    it("calls onClose when form is submitted in popup mode", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      render(<RequestDemoForm isPopup={true} onClose={mockOnClose} />);

      // Fill out the form
      await user.type(screen.getByPlaceholderText("Full Name *"), "John Doe");
      await user.type(
        screen.getByPlaceholderText("Company Name *"),
        "Test Company"
      );
      await user.type(
        screen.getByPlaceholderText("Work Email *"),
        "john@example.com"
      );
      await user.type(
        screen.getByPlaceholderText("Phone Number *"),
        "1234567890"
      );

      // Select a module
      const moduleSelect = screen.getByDisplayValue("Select Module *");
      await user.click(moduleSelect);
      await user.click(screen.getByText("Asset Management"));

      // Submit the form
      const submitButton = screen.getByRole("button", {
        name: /submit request/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockOnClose).toHaveBeenCalled();
      });

      consoleSpy.mockRestore();
    });
  });

  describe("Close Button (Popup Mode)", () => {
    it("calls onClose when close button is clicked", async () => {
      const user = userEvent.setup();
      render(<RequestDemoForm isPopup={true} onClose={mockOnClose} />);

      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);

      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("has proper form labels and structure", () => {
      render(<RequestDemoForm />);

      expect(screen.getByRole("form")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /submit request/i })
      ).toBeInTheDocument();
    });

    it("has required attributes on form fields", () => {
      render(<RequestDemoForm />);

      const nameInput = screen.getByPlaceholderText("Full Name *");
      const emailInput = screen.getByPlaceholderText("Work Email *");
      const phoneInput = screen.getByPlaceholderText("Phone Number *");
      const companyInput = screen.getByPlaceholderText("Company Name *");
      const moduleSelect = screen.getByDisplayValue("Select Module *");

      expect(nameInput).toBeRequired();
      expect(emailInput).toBeRequired();
      expect(phoneInput).toBeRequired();
      expect(companyInput).toBeRequired();
      expect(moduleSelect).toBeRequired();
    });
  });
});
