// Hämta element
const öppnaPopupKnapp = document.getElementById("öppnaPopup");
const stängPopupKnapp = document.getElementById("stängPopup");
const feedbackFönster = document.getElementById("feedbackFönster");
const feedbackFormulär = document.getElementById("feedbackFormulär");

// Visa pop-up
öppnaPopupKnapp.addEventListener("click", () => {
  feedbackFönster.classList.remove("dold");
});

// Stäng pop-up
stängPopupKnapp.addEventListener("click", () => {
  feedbackFönster.classList.add("dold");
});

// Hantera formulärinlämning
feedbackFormulär.addEventListener("submit", (e) => {
  e.preventDefault();

  const betyg = document.getElementById("betyg").value;
  const kommentar = document.getElementById("kommentar").value;

  console.log("Betyg:", betyg);
  console.log("Kommentar:", kommentar);

  alert("Tack för din feedback!");

  feedbackFormulär.reset();
  feedbackFönster.classList.add("dold");
});

// Funktion för knapp för att stänga Gör-så-här-rutan
const instructionsPopup = document.getElementById('instructions');
const instructionsClose = document.getElementById('instructions-close');

instructionsClose.addEventListener('click', function() {
    instructionsPopup.style.display = 'none';
});

// Funktion för "HJÄLP"-knapp i menyraden som öppnar Gör-så-här-rutan
// const HJÄLPKNAPP = document.getElementById('HJÄLPKNAPP');

// HJÄLPKNAPP.addEventListener('click', function() {
//     instructionsPopup.style.display = 'flex';
// });
