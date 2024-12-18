// Funktion för att hantera stjärnornas interaktivitet
const stars = document.querySelectorAll('.feedback-stars .star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    let rating = star.getAttribute('data-value');
    highlightStars(rating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Funktion för att skicka feedback
function submitFeedback() {
  // Hämta feedback-text och stjärnbetyg
  const feedback = document.querySelector('.feedback-textarea').value;
  const rating = document.querySelectorAll('.feedback-stars .star.active').length;

  // Kontrollera att minst en stjärna är vald
  if (rating === 0) {
    alert("Vänligen ge ett betyg innan du skickar!");
    return;
  }

  // Visa bekräftelse till användaren
  alert(`Tack för din feedback!\nBetyg: ${rating} stjärnor\nKommentar: ${feedback}`);

  // Dölj feedback-container
  const feedbackContainer = document.querySelector('.feedback-container');
  feedbackContainer.style.display = 'none'; // Dölj rutan
}
