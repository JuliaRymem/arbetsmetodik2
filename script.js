// Hämta element från HTML
const kontaktLink = document.getElementById("kontaktLink");
const omOssLink = document.getElementById("omOssLink");
const hittaHitLink = document.getElementById("hittaHitLink");

const kontaktPopup = document.getElementById("kontaktPopup");
const omOssPopup = document.getElementById("omOssPopup");
const closeKontakt = document.getElementById("closeKontakt");
const closeOmOss = document.getElementById("closeOmOss");

// Öppna kontakt-popup
kontaktLink.addEventListener("click", (e) => {
  e.preventDefault();
  kontaktPopup.style.display = "block";
});

// Öppna Om oss-popup
omOssLink.addEventListener("click", (e) => {
  e.preventDefault();
  omOssPopup.style.display = "block";
});

// Stäng kontakt-popup
closeKontakt.addEventListener("click", () => {
  kontaktPopup.style.display = "none";
});

// Stäng Om oss-popup
closeOmOss.addEventListener("click", () => {
  omOssPopup.style.display = "none";
});

// Stäng pop-up om användaren klickar utanför popup-fönstret
window.addEventListener("click", (e) => {
  if (e.target === kontaktPopup) {
    kontaktPopup.style.display = "none";
  }
  if (e.target === omOssPopup) {
    omOssPopup.style.display = "none";
  }
});
