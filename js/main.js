// Smooth-scroll enhancement for in-page navigation links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Close mobile nav menu after selection.
    const navLinks = document.querySelector(".nav-links");
    const navToggle = document.querySelector(".nav-toggle");
    if (navLinks && navToggle) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Mobile menu toggle for small screens.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Keep footer copyright year current.
const yearNode = document.getElementById("current-year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
