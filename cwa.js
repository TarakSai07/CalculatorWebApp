document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  if (!form) return; // safety guard

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // After submission logic (no actual submission)
    // Redirect to thank-you page
    window.location.href = "submit-feedback.html";
  });
});