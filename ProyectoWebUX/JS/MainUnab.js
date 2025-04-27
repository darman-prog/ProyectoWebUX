// Validación simple de formularios
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();

  if (usuario === "" || clave === "") {
      alert("Por favor llena todos los campos.");
  } else {
      alert(`Bienvenido ${usuario}!`);
  }
});

// Efecto de aparición al hacer scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          sec.classList.add('show');
      }
  });
});
