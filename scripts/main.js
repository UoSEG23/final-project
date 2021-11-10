const hamburger_button = document.querySelector('.hamburger-btn');

hamburger_button.addEventListener('change', (event) => {
    document.body.setAttribute('hamburger-btn-checked', event.target.checked);
});
  