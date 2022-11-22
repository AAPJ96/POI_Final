for (let i = 0; i < 4; i++) {
    document.getElementById('contenedor').innerHTML += `
    <div class="container p-3 mb-3 tarea" onclick="sigPagina()">
        <div class="container pt-2 mb-2 fw-bold">
            Título de la tarea
        </div>
        <div class="d-flex">
            <div class="col p-2">
                Nombre del grupo
            </div>
            <div class="col p-2">
                Vence el (fecha y hora)
            </div>
        </div>
    </div>
    `;
}

function sigPagina(){
    window.location.href = "http://127.0.0.1:5500/login.html"
}




