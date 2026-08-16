/**
 * components.js — Header y Footer compartidos del Portal UNAB.
 * Inyecta el HTML en los puntos de montaje:
 *   <div data-portal-header="cursos"></div>
 *   <div data-portal-footer></div>
 * Debe cargarse ANTES que shared.js (defer mantiene el orden).
 */
(function () {
  'use strict';

  var PAGINAS = [
    { href: 'MainUnab.html', label: 'Inicio',   page: 'inicio'   },
    { href: 'Libreta.html',   label: 'Libreta',  page: 'libreta'  },
    { href: 'Eventos.html',   label: 'Eventos',  page: 'eventos'  },
    { href: 'Cursos.html',    label: 'Cursos',   page: 'cursos'   },
    { href: 'Perfil.html',    label: 'Perfil',   page: 'perfil'   }
  ];

  function renderHeader(paginaActual) {
    var items = PAGINAS.map(function (p) {
      var activo = p.page === paginaActual ? ' aria-current="page"' : '';
      return '<a class="butonNav" href="' + p.href + '"' + activo + '>' + p.label + '</a>';
    }).join('\n                ');

    return ''
      + '<header>'
      +   '<div class="encabezado-container">'
      +     '<div class="logo-section">'
      +       '<img src="../IMG/FacultadMedicina.png" alt="Logo UNAB" class="logo-unab">'
      +     '</div>'
      +     '<div class="Buscador">'
      +       '<input type="text" placeholder="Buscar en el portal..." aria-label="Buscar">'
      +     '</div>'
      +     '<button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-menu">☰</button>'
      +     '<input type="checkbox" id="toggle">'
      +     '<label for="toggle" id="label_toggle" aria-label="Cambiar a modo oscuro"><i class="fa-solid fa-moon fa-2xl"></i></label>'
      +     '<nav class="nav-menu" id="nav-menu">'
      +       items
      +     '</nav>'
      +   '</div>'
      + '</header>';
  }

  function renderFooter() {
    var enlace = 'https://pasaporte.unab.edu.co/';
    var cursor = '../IMG/cursor 2.png';
    var contactanos = 'https://unab.edu.co/contactanos/';
    var faq = 'https://clic.kayako.com/';

    return ''
      + '<footer class="footer">'
      +   '<div class="footer-container">'
      +     '<div class="footer-left">'
      +       '<div class="footer-text">'
      +         '<p>Universidad Autónoma De Bucaramanga <br> © Todos los derechos reservados</p>'
      +       '</div>'
      +     '</div>'
      +     '<div class="footer-buttons">'
      +       '<a href="' + enlace + '" target="_blank" rel="noopener" class="footer-btn">Encuestas <img src="' + cursor + '" alt="" class="icon-cursor"></a>'
      +       '<a href="' + contactanos + '" target="_blank" rel="noopener" class="footer-btn">Consultas <img src="' + cursor + '" alt="" class="icon-cursor"></a>'
      +       '<a href="' + faq + '" target="_blank" rel="noopener" class="footer-btn">Preguntas frecuentes <img src="' + cursor + '" alt="" class="icon-cursor"></a>'
      +     '</div>'
      +   '</div>'
      + '</footer>';
  }
  var headerMount = document.querySelector('[data-portal-header]');
  if (headerMount) {
    headerMount.outerHTML = renderHeader(headerMount.getAttribute('data-portal-header'));
  }

  var footerMount = document.querySelector('[data-portal-footer]');
  if (footerMount) {
    footerMount.outerHTML = renderFooter();
  }

  var estilos = document.createElement('style');
  estilos.textContent = ''
  + '.footer-btn {'
  +   'display: inline-flex; align-items: center; gap: 8px;'
  +   'padding: 10px 20px; text-decoration: none; border-radius: 6px;'
  +   'transition: all 0.2s ease;'
  + '}'
  + '.footer-btn:hover {'
  +   'background-color: var(--unab-naranja, #ff6600);'
  +   'color: var(--fondo-blanco, #ffffff);'
  +   'transform: translateY(-2px);'
  + '}';
document.head.appendChild(estilos);
})();
