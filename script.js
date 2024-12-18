// Hämta element
const feedbackForm = document.getElementById("feedbackForm");
const feedbackRating = document.getElementById("feedbackRating");
const feedbackComment = document.getElementById("feedbackComment");

// Hantera formulärinlämning
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const betyg = feedbackRating.value;
  const kommentar = feedbackComment.value;

  console.log("Betyg:", betyg);
  console.log("Kommentar:", kommentar);

  alert("Tack för din feedback!");

  feedbackForm.reset();
});
