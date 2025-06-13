// script.js
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-text h2').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.hero-text h2').style.transition = 'opacity 1s';
    document.querySelector('.hero-text h2').style.opacity = 1;
  }, 500);
});
