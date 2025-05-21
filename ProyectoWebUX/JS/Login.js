// Animacion carrusel js
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  // Alternar tipo de input
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Alternar ícono de ojo
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');

});

// animacion ojo y cambio de placeholder
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

showNextSlide();
setInterval(showNextSlide, 5000);