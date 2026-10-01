// عدّل الروابط ورقم الواتساب من هنا فقط
const CONFIG = {
  airbnb: "https://www.airbnb.com/",
  gathern: "https://gathern.co/",
  googleMaps: "https://maps.google.com/",
  whatsapp: "https://wa.me/966500000000"
};

const $ = (selector) => document.querySelector(selector);
const modal = $("#bookingModal");

["#airbnbLink", "#gathernLink", "#locationLink", "#whatsappTop", "#whatsappModal"].forEach((selector, index) => {
  const keys = ["airbnb", "gathern", "googleMaps", "whatsapp", "whatsapp"];
  const element = $(selector);
  if (element) element.href = CONFIG[keys[index]];
});

$("#whatsappBottom")?.addEventListener("click", () => window.open(CONFIG.whatsapp, "_blank", "noopener"));

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-card")?.querySelector("a")?.focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-booking]").forEach((button) => button.addEventListener("click", openModal));
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});
