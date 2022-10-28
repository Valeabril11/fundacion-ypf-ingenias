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

    mostrarNombres(arrayStorage)
}

function donar(e) {
    e.preventDefault();
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


function mostrarNombres(arrayStorage) {
    for (const donante of arrayStorage) {
        let li = document.createElement('li')
        li.innerHTML = donante.nombre
        listaDonantes.appendChild(li)
    }
}

////nuevo boton agregado para mostrar la lista de nombres
let btnDonantes = document.getElementById('btnDonantes')
btnDonantes.addEventListener('click', mostrarContenido)

function mostrarContenido() {
    mostrarDonantes.classList.toggle('ocultar')
    let hayCliente = tieneDatosStorage(donantesLocalStorage)
    hayCliente ? mostrarNombres(donantesLocalStorage) : null
}


