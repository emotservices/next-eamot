export const addMouse = () => {
  const e = document.querySelector(".tf-mouse-inner");
  const t = document.querySelector(".tf-mouse-outer");

  if (!e || !t) return;

  let n,
    i = 0,
    o = false;

  window.onmousemove = function (s) {
    if (!o) {
      t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
    }
    e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
    n = s.clientY;
    i = s.clientX;
  };

  const elements = document.querySelectorAll(
    "a, .canvas, .progress-wrap, .wishlist-button"
  );
  elements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      e.classList.add("mouse-hover");
      t.classList.add("mouse-hover");
    });

    element.addEventListener("mouseleave", function () {
      if (!element.closest(".canvas")) {
        e.classList.remove("mouse-hover");
        t.classList.remove("mouse-hover");
      }
    });
  });

  e.style.visibility = "visible";
  t.style.visibility = "visible";
};
