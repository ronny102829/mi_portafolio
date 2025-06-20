// ========================
// Animación de entrada del texto principal
// ========================
window.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('.hero-text h1');
  if (titulo) {
    titulo.style.opacity = 0;
    setTimeout(() => {
      titulo.style.transition = 'opacity 1s';
      titulo.style.opacity = 1;
    }, 500);
  }
});

// ========================
// Fondo espacial animado
// ========================
function crearEstrella() {
  const estrella = document.createElement("div");
  estrella.classList.add("estrella");

  estrella.style.left = Math.random() * window.innerWidth + "px";
  estrella.style.top = "0px";
  estrella.style.animationDuration = (Math.random() * 5 + 5) + "s";
  estrella.style.zIndex = "0";

  document.body.appendChild(estrella);

  setTimeout(() => {
    estrella.remove();
  }, 10000);
}

setInterval(crearEstrella, 100);

// ========================
// Navegación suave entre secciones
// ========================
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
