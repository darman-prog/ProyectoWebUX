// Animacion carrusel js
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  // Alternar tipo de input
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Alternar ícono de ojo y estado accesible
  const icono = this.querySelector('i');
  if (icono) {
    icono.classList.toggle('fa-eye-slash');
    icono.classList.toggle('fa-eye');
  }
  if (type === 'text') {
    this.setAttribute('aria-label', 'Ocultar contraseña');
  } else {
    this.setAttribute('aria-label', 'Mostrar contraseña');
  }
});

// animacion ojo y cambio de placeholder
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
  });
  index = (index + 1) % slides.length;
}

showNextSlide();
setInterval(showNextSlide, 5000);