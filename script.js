// ==============================
// عدّل الروابط من هنا فقط
// ==============================
const CONFIG = {
  airbnb: "https://www.airbnb.com/",
  gathern: "https://gathern.co/",
  googleMaps: "https://maps.google.com/",
  whatsapp: "https://wa.me/966500000000"
};

document.getElementById("airbnbLink").href = CONFIG.airbnb;
document.getElementById("gathernLink").href = CONFIG.gathern;
document.getElementById("locationLink").href = CONFIG.googleMaps;
document.getElementById("whatsappTop").href = CONFIG.whatsapp;

document.getElementById("whatsappBottom").addEventListener("click", () => {
  window.open(CONFIG.whatsapp, "_blank", "noopener");
});

const modal = document.getElementById("bookingModal");
const openers = document.querySelectorAll("[data-booking]");
const closers = document.querySelectorAll("[data-close]");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openers.forEach(btn => btn.addEventListener("click", openModal));
closers.forEach(btn => btn.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
