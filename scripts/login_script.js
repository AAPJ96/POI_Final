const form = document.getElementById('formLogin');

function redireccionar(){
    window.location.href = "http://127.0.0.1:5500/tareas.html"
}

form.addEventListener('submit', redireccionar)