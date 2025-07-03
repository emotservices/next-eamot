import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Custom render function that includes providers if needed
const customRender = (ui, options = {}) => {
  const AllTheProviders = ({ children }) => {
    return children;
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };

// Custom user event setup with default options
export const setupUser = () => userEvent.setup();

// Helper function to wait for async operations
export const waitForElementToBeRemoved = (element) => {
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
};

// Helper function to mock window properties
export const mockWindowProperty = (property, value) => {
  const originalProperty = window[property];
  window[property] = value;
  return () => {
    window[property] = originalProperty;
  };
};

// Helper function to create mock elements
export const createMockElement = (tag, className, textContent = "") => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

// Helper function to simulate scroll
export const simulateScroll = (scrollY) => {
  Object.defineProperty(window, "scrollY", {
    value: scrollY,
    writable: true,
  });
  window.dispatchEvent(new Event("scroll"));
};

// Helper function to simulate resize
export const simulateResize = (width, height) => {
  Object.defineProperty(window, "innerWidth", {
    value: width,
    writable: true,
  });
  Object.defineProperty(window, "innerHeight", {
    value: height,
    writable: true,
  });
  window.dispatchEvent(new Event("resize"));
};

// Helper function to create mock data
export const createMockFaqData = (count = 3) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Test Question ${index + 1}`,
    content: `Test Answer ${index + 1}`,
    active: index === 0,
  }));
};

// Helper function to create mock form data
export const createMockFormData = (overrides = {}) => {
  return {
    name: "",
    company: "",
    email: "",
    phone: "",
    module: "",
    ...overrides,
  };
};

// Helper function to check if element has specific classes
export const hasClasses = (element, ...classes) => {
  return classes.every((className) => element.classList.contains(className));
};

// Helper function to check if element has specific styles
export const hasStyles = (element, styles) => {
  return Object.entries(styles).every(
    ([property, value]) => element.style[property] === value
  );
};

// Helper function to simulate mouse events
export const simulateMouseEvent = (element, eventType, options = {}) => {
  const event = new MouseEvent(eventType, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
  element.dispatchEvent(event);
  return event;
};

// Helper function to simulate keyboard events
export const simulateKeyboardEvent = (element, eventType, options = {}) => {
  const event = new KeyboardEvent(eventType, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
  element.dispatchEvent(event);
  return event;
};

// Helper function to wait for a condition
export const waitForCondition = (condition, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const checkCondition = () => {
      if (condition()) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error("Condition not met within timeout"));
      } else {
        setTimeout(checkCondition, 10);
      }
    };

    checkCondition();
  });
};

// Helper function to mock console methods
export const mockConsole = (method) => {
  const original = console[method];
  const mock = jest.fn();
  console[method] = mock;
  return {
    mock,
    restore: () => {
      console[method] = original;
    },
  };
};

// Helper function to create a mock component
export const createMockComponent = (displayName, testId) => {
  const MockComponent = ({ children, ...props }) => (
    <div data-testid={testId} {...props}>
      {children || displayName}
    </div>
  );
  MockComponent.displayName = displayName;
  return MockComponent;
};
