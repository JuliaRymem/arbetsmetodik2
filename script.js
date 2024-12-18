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

function submitFeedback() {
  const feedback = document.querySelector('.feedback-textarea').value;
  const rating = document.querySelectorAll('.feedback-stars .star.active').length;
  alert(`Tack för din feedback!\nBetyg: ${rating} stjärnor\nKommentar: ${feedback}`);
}
