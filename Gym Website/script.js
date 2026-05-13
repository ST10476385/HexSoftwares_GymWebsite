const form = document.getElementById('contact-form');
const messageText = document.getElementById('form-message');
const readMoreBtn = document.getElementById('read-more-btn');
const moreInfo = document.getElementById('more-info');

if (readMoreBtn && moreInfo) {
  readMoreBtn.addEventListener('click', () => {
    const isVisible = moreInfo.classList.toggle('show');
    readMoreBtn.textContent = isVisible ? 'Show Less' : 'Read More';
    if (isVisible) {
      moreInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    messageText.textContent = 'Please fill out all fields before sending.';
    return;
  }

  messageText.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});
