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