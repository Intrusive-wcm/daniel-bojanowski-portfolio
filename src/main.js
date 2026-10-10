import { initProjectVisualHeaders } from "./projectVisualHeader.js";
import finacePlanFullImage from "../public/images/projects/finace/plan-vs-actual.webp";
import finaceCashflowFullImage from "../public/images/projects/finace/cash-flow-forecast.webp";
import finaceReceiptFullImage from "../public/images/projects/finace/receipt-ocr.webp";
import morvenessePnlFullImage from "../public/images/projects/morvenesse/management-pnl-full.webp";
import morvenesseProjectFullImage from "../public/images/projects/morvenesse/project-intelligence-full.webp";
import morvenesseReportingFullImage from "../public/images/projects/morvenesse/reporting-layer-full.webp";
import sapAcademicReport from "../public/documents/sap-lsmw-case-study.pdf?url";

document.documentElement.classList.add("js");

initProjectVisualHeaders();

// Include the academic report in the build and resolve both existing links.
document.querySelectorAll('a[href="./public/documents/sap-lsmw-case-study.pdf"]').forEach((link) => {
  link.href = sapAcademicReport;
});

const icon = (name) => {
  const icons = {
    github: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>',
    email: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    location: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    erp: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M7 7V4h10v3M8 11h3v3H8zM14 11h3M14 14h3M8 17h9"/></svg>',
    transactions: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 18h16M6 15l4-5 3 2 5-7M15 5h3v3"/></svg>',
    costs: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>',
    context: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/></svg>',
    reporting: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M3 20h18"/></svg>',
    analysis: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 18 9 12l4 3 7-9M16 6h4v4"/></svg>',
    validation: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 4.5 6v5.4c0 4.5 3.1 7.8 7.5 9.6 4.4-1.8 7.5-5.1 7.5-9.6V6L12 3Z"/><path d="m8.7 12 2.1 2.1 4.7-5"/></svg>',
    automation: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
    understand: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
    structure: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><ellipse cx="12" cy="5.5" rx="7" ry="3"/><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    controls: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 6h7M15 6h5M4 12h3M11 12h9M4 18h10M18 18h2"/><circle cx="13" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>',
    deliver: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 2.7 2.7L16.5 9"/></svg>',
    layers: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
    ownership: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M14 15a5 5 0 0 1 7 4v1"/></svg>',
  };
  return icons[name] ?? "";
};

// Inject common icons without an icon dependency.
document.querySelectorAll("[data-icon]").forEach((element) => {
  element.insertAdjacentHTML("afterbegin", icon(element.dataset.icon));
});

// One-shot reveal system shared by the complete page narrative.
const revealGroups = [
  { selector: ".hero-background, .hero-panorama, .section-network", kind: "lines" },
  { selector: ".hero-copy, .how-work__heading, .section-heading, .project-detail__intro", kind: "heading" },
  { selector: ".hero-visual, .gallery-card", kind: "media" },
  { selector: ".process-card, .project-card, .story-card, .experience-item, .contact-card", kind: "card" },
  { selector: ".work-traits, .focus-strip, .project-detail > div:last-child", kind: "list" },
];

revealGroups.forEach(({ selector, kind }) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (!element.hasAttribute("data-reveal")) element.dataset.reveal = kind;
    if (["card", "media", "list"].includes(kind)) {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    }
  });
});

const revealElements = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

// Mobile navigation.
const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("[data-main-nav]");

const closeMenu = () => {
  mainNav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("nav-open");
};

menuToggle?.addEventListener("click", () => {
  const willOpen = !mainNav.classList.contains("is-open");
  mainNav.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("nav-open", willOpen);
});

mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

// Keep the current section reflected in the primary navigation.
const navLinks = [...(mainNav?.querySelectorAll('a[href^="#"]') ?? [])];
const navTargets = navLinks
  .map((link) => ({ link, target: document.querySelector(link.getAttribute("href")) }))
  .filter(({ target }) => target);
let navTicking = false;

const updateActiveNav = () => {
  const headerOffset = document.querySelector(".site-header")?.offsetHeight ?? 0;
  const marker = window.scrollY + headerOffset + window.innerHeight * 0.28;
  let activeLink = null;

  navTargets.forEach(({ link, target }) => {
    if (target.offsetTop <= marker) activeLink = link;
  });

  const reachedPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (reachedPageEnd) activeLink = navTargets.at(-1)?.link ?? activeLink;

  navLinks.forEach((link) => {
    if (link === activeLink) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  navTicking = false;
};

const requestNavUpdate = () => {
  if (navTicking) return;
  navTicking = true;
  window.requestAnimationFrame(updateActiveNav);
};

window.addEventListener("scroll", requestNavUpdate, { passive: true });
window.addEventListener("resize", requestNavUpdate);
updateActiveNav();

// Image lightbox with keyboard and focus handling.
const modal = document.querySelector("[data-image-modal]");
const modalImage = modal?.querySelector("[data-modal-image]");
const modalCaption = modal?.querySelector("[data-modal-caption]");
const modalClose = modal?.querySelector("[data-modal-close]");
let lastFocusedElement = null;
let modalRequest = 0;
const morvenesseFullImages = {
  "management-pnl": morvenessePnlFullImage,
  "project-intelligence": morvenesseProjectFullImage,
  "reporting-layer": morvenesseReportingFullImage,
};

const closeModal = () => {
  modalRequest += 1;
  modalImage?.removeAttribute("src");
  if (!modal?.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus({ preventScroll: true });
};

const openModal = async (button) => {
  const request = ++modalRequest;
  const isFinace = Boolean(button.closest("#finace-case-study"));
  const previewImage = button.querySelector("img");
  // Resolve the final screenshot before assigning the image source.
  let fullImageSrc = previewImage?.currentSrc || previewImage?.src || button.dataset.lightboxSrc;
  if (isFinace) {
    // Resolve full workspaces separately from their covers through Vite's image URLs.
    fullImageSrc = button.hasAttribute("data-finace-plan-preview")
      ? finacePlanFullImage
      : button.hasAttribute("data-finace-cashflow-preview")
      ? finaceCashflowFullImage
      : finaceReceiptFullImage;
  }
  if (button.dataset.morvenessePreview) {
    fullImageSrc = morvenesseFullImages[button.dataset.morvenessePreview];
  }
  modalImage.src = fullImageSrc;
  try {
    // Keep the lightbox hidden until the full screenshot is ready to paint.
    await modalImage.decode();
  } catch {
    return;
  }
  // Escape or a newer click cancels an unfinished opening.
  if (request !== modalRequest) return;
  lastFocusedElement = button;
  modal.dataset.project = isFinace ? "finace" : "highlights";
  modalImage.alt = button.dataset.lightboxAlt ?? "Project screenshot";
  modalCaption.textContent = button.dataset.lightboxCaption ?? "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".image-modal__figure").scrollTo(0, 0);
  document.body.classList.add("modal-open");
  modalClose.focus({ preventScroll: true });
};

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => openModal(button));
});

// Keep the native button as the keyboard and focus-return target for each card.
document.querySelectorAll("#morvenesse-case-study .gallery-card").forEach((card) => {
  const button = card.querySelector(".gallery-button");
  card.addEventListener("click", (event) => {
    if (!event.target.closest(".gallery-button")) button.click();
  });
});

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && modal?.classList.contains("is-open")) {
    event.preventDefault();
    modalClose.focus();
  }
  if (event.key === "Escape") {
    closeModal();
    closeMenu();
  }
});

// Current year in the footer.
const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());
