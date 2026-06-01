/**
 * MedFactory Contact Page
 */
(function () {
  "use strict";

  const MF = window.MedFactory;
  const I18n = () => window.MedFactoryI18n;
  const WA_NUMBER = "201000000000";

  const form = document.getElementById("contact-form");
  const formError = document.getElementById("contact-form-error");
  const waFromFormBtn = document.getElementById("contact-wa-from-form");

  function t(key) {
    return I18n() ? I18n().t(key) : key;
  }

  function initFaq() {
    const triggers = document.querySelectorAll(".faq-item__trigger");
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;

        triggers.forEach((other) => {
          if (other === trigger) return;
          other.setAttribute("aria-expanded", "false");
          const otherPanelId = other.getAttribute("aria-controls");
          const otherPanel = otherPanelId
            ? document.getElementById(otherPanelId)
            : null;
          if (otherPanel) otherPanel.hidden = true;
        });

        if (expanded) {
          trigger.setAttribute("aria-expanded", "false");
          if (panel) panel.hidden = true;
        } else {
          trigger.setAttribute("aria-expanded", "true");
          if (panel) panel.hidden = false;
        }
      });
    });
  }

  function getSubjectLabel(value) {
    const map = {
      order: "contact.form.subjectOrder",
      product: "contact.form.subjectProduct",
      shipping: "contact.form.subjectShipping",
      bulk: "contact.form.subjectBulk",
      other: "contact.form.subjectOther",
    };
    return t(map[value] || "contact.form.subjectOther");
  }

  function buildWhatsAppUrl(data) {
    const lines = [
      "Hi MedFactory,",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
    ];
    if (data.email) lines.push(`Email: ${data.email}`);
    lines.push(`Topic: ${data.subjectLabel}`);
    lines.push("");
    lines.push(data.message);
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }

  function getFormData() {
    const name = document.getElementById("contact-name")?.value.trim();
    const phone = document.getElementById("contact-phone")?.value.trim();
    const email = document.getElementById("contact-email")?.value.trim();
    const subjectEl = document.getElementById("contact-subject");
    const subject = subjectEl?.value;
    const message = document.getElementById("contact-message")?.value.trim();

    return {
      name,
      phone,
      email,
      subject,
      subjectLabel: getSubjectLabel(subject),
      message,
    };
  }

  function showFormError(key) {
    if (!formError) return;
    formError.textContent = t(key);
    formError.hidden = false;
  }

  function clearFormError() {
    if (!formError) return;
    formError.hidden = true;
    formError.textContent = "";
  }

  function validate(data) {
    if (!data.name || !data.phone || !data.subject || !data.message) {
      showFormError("contact.form.errorRequired");
      return false;
    }
    if (data.phone.length < 8) {
      showFormError("contact.form.errorPhone");
      return false;
    }
    clearFormError();
    return true;
  }

  function openWhatsApp(data) {
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");
  }

  function initForm() {
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validate(data)) return;

      MF?.showToast(t("contact.form.success"));
      openWhatsApp(data);
      form.reset();
    });

    waFromFormBtn?.addEventListener("click", () => {
      const data = getFormData();
      if (!validate(data)) return;
      openWhatsApp(data);
    });

    form.querySelectorAll("input, select, textarea").forEach((el) => {
      el.addEventListener("input", clearFormError);
      el.addEventListener("change", clearFormError);
    });
  }

  function updatePageTitle() {
    const lang = I18n()?.getLang() || "en";
    document.title =
      lang === "ar" ? "تواصل معنا — ميد فاكتوري" : "Contact — MedFactory";
  }

  function initI18nExtras() {
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && I18n()) el.placeholder = I18n().t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && I18n()) el.setAttribute("aria-label", I18n().t(key));
    });

    updatePageTitle();
    window.addEventListener("mf:langchange", () => {
      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key && I18n()) el.placeholder = I18n().t(key);
      });
      document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        if (key && I18n()) el.setAttribute("aria-label", I18n().t(key));
      });
      updatePageTitle();
    });
  }

  function init() {
    if (MF?.initShell) MF.initShell();
    if (MF?.initReveal) MF.initReveal();
    initFaq();
    initForm();
    initI18nExtras();
    window.addEventListener("mf:langchange", () => {
      if (I18n()) I18n().applyDom();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
