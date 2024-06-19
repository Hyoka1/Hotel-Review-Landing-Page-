document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const feedbackForm = document.querySelector('.feedback-form');
  const loadingMessage = document.querySelector('.loading');
  const ratingInput = document.getElementById('rating');
  
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-value');
      ratingInput.value = rating;
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
      }
      if (rating > 3) {
        loadingMessage.classList.remove('hidden');
        setTimeout(() => {
          window.location.href = 'https://maps.app.goo.gl/FBx7hfeKAhiBpiMH8';
        }, 2000);
      } else {
        feedbackForm.classList.remove('hidden');
      }
    });
  });

  document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
    alert('Feedback submitted!');
  });
});
