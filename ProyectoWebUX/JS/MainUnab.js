const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
navMenu.classList.toggle('active');
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