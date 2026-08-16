(function () {
  'use strict';

  function actualizarIconoModo(activado) {
    var label = document.getElementById('label_toggle');
    if (!label) return;
    if (activado) {
      label.innerHTML = '<i class="fa-solid fa-sun fa-2xl" style="color: #FFD43B;"></i>';
    } else {
      label.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i>';
    }
  }

  function aplicarModoOscuro(activado) {
    document.body.classList.toggle('Modo-oscuro', activado);
    actualizarIconoModo(activado);
    try {
      localStorage.setItem('modoOscuro', activado ? 'true' : 'false');
    } catch (e) {}
  }

  var toggle = document.getElementById('toggle');
  if (toggle) {
    var guardado = null;
    try { guardado = localStorage.getItem('modoOscuro'); } catch (e) {}

    if (guardado === 'true') {
      toggle.checked = true;
      document.body.classList.add('Modo-oscuro');
      actualizarIconoModo(true);
    }

    toggle.addEventListener('change', function () {
      aplicarModoOscuro(toggle.checked);
    });
  }

  var toggleBtn = document.querySelector('.menu-toggle');
  var navMenu = document.querySelector('.nav-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      var abierto = navMenu.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  var contenedor = document.getElementById('contenedorMain');
  if (contenedor) {
    setTimeout(function () {
      contenedor.style.left = '0';
    }, 80);
  }
})();
