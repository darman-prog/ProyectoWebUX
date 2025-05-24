console.log("Universo alterno")

function mostrarImagen() {
    const archivo = document.getElementById("fileInput").files[0];

    if (!archivo) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    console.log("Imagen seleccionada:", archivo.name); // Verifica que el archivo existe

    // Verificar que sea una imagen
    if (!archivo.type.startsWith("image/")) {
        alert("Por favor, selecciona un archivo de imagen válido.");
        return;
    }

    const lector = new FileReader();

    lector.onload = function(e) {
        console.log("Imagen cargada correctamente.");
        document.getElementById("imagenMostrada").src = e.target.result;
    };

    lector.onerror = function() {
        alert("Hubo un error al cargar la imagen.");
        console.error("Error al leer la imagen.");
    };

    lector.readAsDataURL(archivo); // Convierte la imagen en una URL base64
}

document.getElementById("profilePicInput").addEventListener("change", function(event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function(e) {
            const imagen = document.getElementById("previewImage");
            imagen.src = e.target.result;
            imagen.style.display = "block";
        };
        lector.readAsDataURL(archivo);
    }
});


let toggle=document.getElementById('toggle');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('Modo-oscuro');
    if (checked == true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun fa-2xl" style="color: #FFD43B;"></i>'
    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon fa-2xl"></i>'
    }
})

console.log("Universo alterno")
