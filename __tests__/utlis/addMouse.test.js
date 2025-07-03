import { addMouse } from "@/utlis/addMouse";

describe("addMouse", () => {
  let mockMouseInner;
  let mockMouseOuter;
  let mockElements;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = "";

    // Create mock elements
    mockMouseInner = document.createElement("div");
    mockMouseInner.className = "tf-mouse-inner";
    mockMouseInner.style.visibility = "hidden";

    mockMouseOuter = document.createElement("div");
    mockMouseOuter.className = "tf-mouse-outer";
    mockMouseOuter.style.visibility = "hidden";

    // Create mock interactive elements
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Test Link";

    const canvas = document.createElement("div");
    canvas.className = "canvas";
    canvas.textContent = "Canvas";

    const progressWrap = document.createElement("div");
    progressWrap.className = "progress-wrap";
    progressWrap.textContent = "Progress";

    const wishlistButton = document.createElement("button");
    wishlistButton.className = "wishlist-button";
    wishlistButton.textContent = "Wishlist";

    // Add elements to DOM
    document.body.appendChild(mockMouseInner);
    document.body.appendChild(mockMouseOuter);
    document.body.appendChild(link);
    document.body.appendChild(canvas);
    document.body.appendChild(progressWrap);
    document.body.appendChild(wishlistButton);

    mockElements = [link, canvas, progressWrap, wishlistButton];
  });

  afterEach(() => {
    // Clean up event listeners
    window.onmousemove = null;
  });

  describe("Initialization", () => {
    it("does nothing if mouse elements are not found", () => {
      // Remove mouse elements
      document.body.removeChild(mockMouseInner);
      document.body.removeChild(mockMouseOuter);

      expect(() => addMouse()).not.toThrow();
    });

    it("makes mouse elements visible when found", () => {
      addMouse();

      expect(mockMouseInner.style.visibility).toBe("visible");
      expect(mockMouseOuter.style.visibility).toBe("visible");
    });
  });

  describe("Mouse Movement", () => {
    it("updates mouse position on mousemove", () => {
      addMouse();

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: 100,
        clientY: 200,
      });

      window.dispatchEvent(mouseEvent);

      expect(mockMouseInner.style.transform).toBe("translate(100px, 200px)");
      expect(mockMouseOuter.style.transform).toBe("translate(100px, 200px)");
    });

    it("updates mouse position with different coordinates", () => {
      addMouse();

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: 300,
        clientY: 400,
      });

      window.dispatchEvent(mouseEvent);

      expect(mockMouseInner.style.transform).toBe("translate(300px, 400px)");
      expect(mockMouseOuter.style.transform).toBe("translate(300px, 400px)");
    });

    it("handles multiple mouse movements", () => {
      addMouse();

      // First movement
      const mouseEvent1 = new MouseEvent("mousemove", {
        clientX: 100,
        clientY: 200,
      });
      window.dispatchEvent(mouseEvent1);

      expect(mockMouseInner.style.transform).toBe("translate(100px, 200px)");
      expect(mockMouseOuter.style.transform).toBe("translate(100px, 200px)");

      // Second movement
      const mouseEvent2 = new MouseEvent("mousemove", {
        clientX: 150,
        clientY: 250,
      });
      window.dispatchEvent(mouseEvent2);

      expect(mockMouseInner.style.transform).toBe("translate(150px, 250px)");
      expect(mockMouseOuter.style.transform).toBe("translate(150px, 250px)");
    });
  });

  describe("Hover Effects", () => {
    it("adds hover class when mouse enters interactive element", () => {
      addMouse();

      const link = document.querySelector("a");
      const mouseEnterEvent = new MouseEvent("mouseenter");

      link.dispatchEvent(mouseEnterEvent);

      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);
    });

    it("removes hover class when mouse leaves interactive element", () => {
      addMouse();

      const link = document.querySelector("a");
      const mouseEnterEvent = new MouseEvent("mouseenter");
      const mouseLeaveEvent = new MouseEvent("mouseleave");

      // First enter
      link.dispatchEvent(mouseEnterEvent);
      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);

      // Then leave
      link.dispatchEvent(mouseLeaveEvent);
      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(false);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(false);
    });

    it("adds hover class to all interactive elements", () => {
      addMouse();

      mockElements.forEach((element) => {
        const mouseEnterEvent = new MouseEvent("mouseenter");
        element.dispatchEvent(mouseEnterEvent);

        expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
        expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);

        // Clean up for next iteration
        const mouseLeaveEvent = new MouseEvent("mouseleave");
        element.dispatchEvent(mouseLeaveEvent);
      });
    });

    it("handles hover on canvas element correctly", () => {
      addMouse();

      const canvas = document.querySelector(".canvas");
      const mouseEnterEvent = new MouseEvent("mouseenter");
      const mouseLeaveEvent = new MouseEvent("mouseleave");

      // Enter canvas
      canvas.dispatchEvent(mouseEnterEvent);
      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);

      // Leave canvas - should keep hover state due to canvas logic
      canvas.dispatchEvent(mouseLeaveEvent);
      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);
    });
  });

  describe("Event Handling", () => {
    it("sets up mousemove event listener on window", () => {
      addMouse();

      expect(window.onmousemove).toBeDefined();
      expect(typeof window.onmousemove).toBe("function");
    });

    it("sets up mouseenter and mouseleave listeners on interactive elements", () => {
      addMouse();

      mockElements.forEach((element) => {
        // Check that the element has event listeners
        const mouseEnterEvent = new MouseEvent("mouseenter");
        const mouseLeaveEvent = new MouseEvent("mouseleave");

        expect(() => {
          element.dispatchEvent(mouseEnterEvent);
          element.dispatchEvent(mouseLeaveEvent);
        }).not.toThrow();
      });
    });
  });

  describe("Edge Cases", () => {
    it("handles zero coordinates", () => {
      addMouse();

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: 0,
        clientY: 0,
      });

      window.dispatchEvent(mouseEvent);

      expect(mockMouseInner.style.transform).toBe("translate(0px, 0px)");
      expect(mockMouseOuter.style.transform).toBe("translate(0px, 0px)");
    });

    it("handles negative coordinates", () => {
      addMouse();

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: -100,
        clientY: -200,
      });

      window.dispatchEvent(mouseEvent);

      expect(mockMouseInner.style.transform).toBe("translate(-100px, -200px)");
      expect(mockMouseOuter.style.transform).toBe("translate(-100px, -200px)");
    });

    it("handles large coordinates", () => {
      addMouse();

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: 9999,
        clientY: 9999,
      });

      window.dispatchEvent(mouseEvent);

      expect(mockMouseInner.style.transform).toBe("translate(9999px, 9999px)");
      expect(mockMouseOuter.style.transform).toBe("translate(9999px, 9999px)");
    });
  });

  describe("Integration", () => {
    it("works with multiple interactive elements simultaneously", () => {
      addMouse();

      const link = document.querySelector("a");
      const canvas = document.querySelector(".canvas");

      // Move mouse
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: 100,
        clientY: 200,
      });
      window.dispatchEvent(mouseEvent);

      // Hover over link
      const linkEnterEvent = new MouseEvent("mouseenter");
      link.dispatchEvent(linkEnterEvent);

      expect(mockMouseInner.style.transform).toBe("translate(100px, 200px)");
      expect(mockMouseOuter.style.transform).toBe("translate(100px, 200px)");
      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);

      // Leave link
      const linkLeaveEvent = new MouseEvent("mouseleave");
      link.dispatchEvent(linkLeaveEvent);

      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(false);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(false);

      // Hover over canvas
      const canvasEnterEvent = new MouseEvent("mouseenter");
      canvas.dispatchEvent(canvasEnterEvent);

      expect(mockMouseInner.classList.contains("mouse-hover")).toBe(true);
      expect(mockMouseOuter.classList.contains("mouse-hover")).toBe(true);
    });
  });
});
