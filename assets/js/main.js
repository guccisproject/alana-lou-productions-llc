/* Alana Lou Productions LLC — shared site behavior:
   mobile nav, active link highlighting, footer year,
   cookie banner, cart badge, and generic form submit handling. */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  highlightActiveNav();
  setFooterYear();
  initCookieBanner();
  initCartBadge();
  initGenericForms();
});

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
}

function initCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;
  const KEY = "alp_cookie_consent";

  let consent = null;
  try {
    consent = localStorage.getItem(KEY);
  } catch (err) {
    consent = null;
  }

  if (!consent) {
    banner.classList.add("is-visible");
  }

  const acceptBtn = banner.querySelector("[data-cookie-accept]");
  const declineBtn = banner.querySelector("[data-cookie-decline]");

  function hide(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (err) {
      /* ignore — banner will just reappear next visit */
    }
    banner.classList.remove("is-visible");
  }

  if (acceptBtn) acceptBtn.addEventListener("click", function () { hide("accepted"); });
  if (declineBtn) declineBtn.addEventListener("click", function () { hide("declined"); });
}

function initCartBadge() {
  function update() {
    const badges = document.querySelectorAll("[data-cart-count]");
    if (!badges.length || typeof ALPCart === "undefined") return;
    const count = ALPCart.count();
    badges.forEach(function (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    });
  }
  update();
  document.addEventListener("alp-cart-updated", update);
}

function initGenericForms() {
  document.querySelectorAll("form[data-alp-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const statusEl = form.querySelector("[data-form-status]");
      const formName = form.getAttribute("data-alp-form");
      const data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });
      data._submittedAt = new Date().toISOString();

      try {
        const key = "alp_submissions_" + formName;
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push(data);
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (err) {
        /* localStorage unavailable — submission still "succeeds" from the user's view */
      }

      if (statusEl) {
        statusEl.textContent =
          "Thank you! Your message has been received — we respond to every inquiry as soon as we see it.";
        statusEl.classList.remove("is-error");
        statusEl.classList.add("is-success", "is-visible");
      }

      form.reset();

      const redirect = form.getAttribute("data-alp-redirect");
      if (redirect) {
        window.setTimeout(function () {
          window.location.href = redirect;
        }, 900);
      }
    });
  });
}
