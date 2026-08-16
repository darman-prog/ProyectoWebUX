(function () {
    'use strict';

    var STORAGE_KEY = 'fotoPerfil';
    var img = document.getElementById('previewImage');
    var input = document.getElementById('profilePicInput');

    if (!img || !input) return;

    try {
        var guardada = localStorage.getItem(STORAGE_KEY);
        if (guardada) {
            img.src = guardada;
        }
    } catch (e) {}

    input.addEventListener('change', function (event) {
        var archivo = event.target.files[0];
        if (archivo) {
            var lector = new FileReader();
            lector.onload = function (e) {
                img.src = e.target.result;
                try {
                    localStorage.setItem(STORAGE_KEY, e.target.result);
                } catch (err) {}
            };
            lector.readAsDataURL(archivo);
        }
    });
})();
