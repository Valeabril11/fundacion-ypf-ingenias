let donacion = document.getElementById('formularioDonaciones')
let inputDonarNombre = document.getElementById('nombreDonante')
let inputDonarValor = document.getElementById('dineroDonado')

let btnDonar = document.getElementById('btnDonar')
btnDonar.addEventListener('click', donar)

let donantesLocalStorage = JSON.parse(localStorage.getItem("Donaciones"));

const donaciones = []
// @Precondicion: verificar si el local storage tiene datos.
// @Postcondicion: La funcion recibe los datos como parametro y verifica si vienen null, devuelve true o false dependiendo si datos es null o no.

const tieneDatosStorage = (datos) => {
    return datos !== null ? true : false
}

// @Precondicion: Almacena los datos en localStorage, limpia input y llama a la función mostrarNombres()
// @Postcondicion: Recibe un array correspondiente al del local storage o al array de donantes, dependiendo de la verificación previa
// en donde se utiliza la función, y recibe como segundo parametro al cliente que va a almacenar en el localStorage, pusheando al array recibido.

const almacenarStorage = (arrayStorage, cliente) => {
    arrayStorage.push(cliente);
    setLocalStorage(arrayStorage);
    //luego de guardar la info, limpiamos el input para un nuevo nombre
    inputDonarNombre.value = '';
    mostrarBtnAct(arrayStorage)

}

function donar(e) {
    if (inputDonarNombre.value != '') {
        let cliente = { nombre: inputDonarNombre.value, donacion: inputDonarValor.value };
        let existenDatos = tieneDatosStorage(donantesLocalStorage);
        //si existe ya el array en storage, guarda el nuevo cliente sobre ese array existente, de no existir, manda el array donaciones con el cliente

        existenDatos ? almacenarStorage(donantesLocalStorage, cliente) : almacenarStorage(donaciones, cliente);

    }
}


function setLocalStorage(array) {
    localStorage.setItem('Donaciones', JSON.stringify(array));
}

let mostrarDonantes = document.getElementById('mostrarDonantes')
let listaDonantes = document.getElementById('listaDonantes')
let h3 = document.getElementById('textLocal')
let actualizarBtn = document.getElementById('actualizarBtn')

//si existen datos, cambia el texto del h3 y muestra el botón para actualizar la lista
function mostrarBtnAct(existenDatos) {
    if (existenDatos) {
        h3.textContent = 'Hay donantes'
        actualizarBtn.classList.remove('ocultar')
    }
}


function mostrarContenido() {
    let existenDatos = tieneDatosStorage(donantesLocalStorage);
    existenDatos ? mostrarNombres() : null
}
//si existen datos mostrarlos en la pagina
mostrarContenido()

function mostrarNombres() {
    let existenDatos = tieneDatosStorage(donantesLocalStorage);
    mostrarDonantes.classList.remove('ocultar')
    mostrarBtnAct(existenDatos)
    if (existenDatos) {
        for (const donante of donantesLocalStorage) {
            let li = document.createElement('li')
            li.classList.add('listaLi')
            li.innerHTML = donante.nombre
            listaDonantes.appendChild(li)
        }
    } else {
        for (const donante of donaciones) {
            let li = document.createElement('li')
            li.classList.add('listaLi')
            li.innerHTML = donante.nombre
            listaDonantes.appendChild(li)
        }
    }

}
//agrego los li(linea 75-76) con una clase para despues poder borrarla llamando a esa clase y no a todos los li, pq me borra los li del menu
//de ese modo, llamo a los li con su clase
function removeChildrens() {
    let lista = document.querySelectorAll('li.listaLi');
    for (let i = 0; li = lista[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

actualizarBtn.addEventListener('click', () => {
    removeChildrens()
    mostrarNombres()
})


