function mostrarDatos() { 
    let request = sendRequest('usuarios', 'GET', '');
    let table = document.getElementById('form-table').getElementsByTagName('tbody')[0];
    table.innerHTML = ""; 

    request.onload = function() {
        if (request.status === 200) {
            let data = request.response;
            data.forEach(element => {
                table.innerHTML += `
                <tr>
                    <td>${element._id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.correo}</td>
                    <td>${element.direccion}</td>
                    <td>${element.comentario}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick="window.location='/form.html?id=${element._id}'">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="eliminarusuarios('${element._id}')">Eliminar</button>
                    </td>
                </tr>
                `;
            });
        } else {
            table.innerHTML = `
            <tr>
                <td colspan="6">Error al traer los datos</td>
            </tr>`;
        }
    };

    request.onerror = function() {
        table.innerHTML = `
        <tr>
            <td colspan="6">Error al traer los datos</td>
        </tr>`;
    };
}

function eliminarusuarios(_id) {
    let request = sendRequest('usuarios/' + _id, 'DELETE', '');
    request.onload = function() {
        if (request.status === 200) {
            mostrarDatos();
        } else {
            alert("Error al eliminar el usuario");
        }
    };

    request.onerror = function() {
        alert("Error al eliminar el usuario");
    };
}

function guardarOmodificarDatos(_id = null) {
    const data = {
        nombre: document.getElementById('nombre-n').value,
        correo: document.getElementById('correo-c').value,
        direccion: document.getElementById('direccion-d').value,
        comentario: document.getElementById('comentario-c').value
    };
    const metodo = _id ? 'PUT' : 'POST';
    const url = _id ? `usuarios/${_id}` : 'usuarios';
    let request = sendRequest(url, metodo, data);
    
    request.onload = function () {
        if (request.status === 200) {
            window.location = 'index.html';
        } else {
            alert(`Error en la solicitud de ${metodo}`);
        }
    };

    request.onerror = function () {
        alert(`Error en la solicitud de ${metodo}`);
    };
}

function cargarDatos(_id) {
    let request = sendRequest('usuarios/' + _id, 'GET', '');
    const campos = {
        nombre: document.getElementById('nombre-n'),
        correo: document.getElementById('correo-c'),
        direccion: document.getElementById('direccion-d'),
        comentario: document.getElementById('comentario-c')
    };

    request.onload = function() {
        if (request.status === 200) {
            const data = request.response;
            for (let info in campos) {
                if (data[info] !== undefined) {
                    campos[info].value = data[info];
                }
            }
        } else {
            alert("Error al cargar los datos");
        }
    };

    request.onerror = function() {
        alert("Error al cargar los datos");
    };
}
