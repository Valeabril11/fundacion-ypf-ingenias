///////////
/* JSON STORAGE */
///////////
/* Tarea:
Almacenar en Storage información ingresada por el usuario.
Puede ser un texto, números, o combinación.Luego
mostrarla mediante alert o console.
● Declarar un array de objetos(literales, con función
constructora o con clases) y almacenar el array en formato
JSON en el storage. */

//hay dos ejercicios realizados
//1
///EJEMPLO INGRESANDO POR PROMPT PRODUCTOS
//persiste en memoria, pero si actualizo se sobreescribe con los nuevos productos ingresados
/* const productosIngresados = []
let continuar;

do {
    let entrada = {
        nombreProducto: prompt('Ingrese nombre de producto')
    }
    productosIngresados.push(entrada)

    continuar = prompt('Desea agregar otro producto? Ingrese si o esc para salir')

} while (continuar !== 'esc')


const agregarStorage = () => {
    localStorage.setItem('ProductosIngresados', JSON.stringify(productosIngresados))
}

agregarStorage()


let parsearDatos = JSON.parse(localStorage.getItem('ProductosIngresados'))
console.log(parsearDatos) */

//2
/*
///// EJEMPLO CON PRODUCTOS YA INGRESADOS EN EL ARCHIVO
let productos = [
    { id: 1, nombre: 'pelota' },
    { id: 2, nombre: 'alimento' },
    { id: 3, nombre: 'pipeta' }
]

let prod = localStorage.setItem('productos', JSON.stringify(productos))

let mostrarProductos = JSON.parse(localStorage.getItem('productos'))
console.log(mostrarProductos)

let nombreProductos = []

let mostrar = () => {
    for (const prod of mostrarProductos) {
        nombreProductos.push(prod.nombre)
    }
}
mostrar()
console.log(nombreProductos)
alert(nombreProductos) */










////////////////
/* tercera entrega */
////////////////
/*
let resultado = 0
//va a ser luego un array de objetos con los usuarios y sus datos
const usuarios = []

//producto no hace falta meterlo como parametro en el constructor.
class Usuario {
    constructor(nombre, donacion) {
        this.nombre = nombre;
        this.donacion = donacion;
        this.productos = [];
    }

    saludar() {
        console.log(`Bienvenido ${this.nombre}, gracias por donar ${this.donacion}`)
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    obtenerProductos() {
        console.log(`${this.nombre} compro estos productos: ${this.productos}`)
    }
}

let usuario1 = new Usuario('Maria', 500)
let usuario2 = new Usuario('Laura', 500)
let usuario3 = new Usuario('Ana', 500)

//agregamos todos los usuarios con su donacion a un array. queda un array de objetos
usuarios.push(usuario1)
usuarios.push(usuario2)
usuarios.push(usuario3)

//imprime el saludo con el nombre del usuario y la donacion que hizo
usuario1.saludar()
usuario2.saludar()
usuario3.saludar()

//agregamos los productos que "compró "el usuario
usuario1.agregarProducto('pipeta')
usuario1.agregarProducto('collar')
usuario3.agregarProducto('alimento')

//obtener los productos de ese usuario
usuario1.obtenerProductos()
usuario3.obtenerProductos()

//suma de lo donado
function suma(obj) {
    obj.forEach(data => {
        let donado = data.donacion
        resultado = resultado + donado
        return resultado
    });
}

//muestra el array de objetos , cada usuario con lo donado, nombre y si tiene o no productos
console.log(usuarios)
suma(usuarios)
console.log(`El total donado es: ${resultado}`)//1500

let nombreUsuarios = []
//obtener un array solamente con los nombres de los usuarios
for (nomb of usuarios) {
    nombreUsuarios.push(nomb.nombre)
}

console.log('Los nombres de los usuarios son: ' + nombreUsuarios) //maria ana laura
console.log(nombreUsuarios) // ['maria','ana','laura'] */


//clase22 EVENTOS

/* let btn = document.getElementById('btn')

btn.addEventListener('click', mostrarContenido)

let padre = document.getElementById("ejercicio");


function mostrarContenido() {
    let li = document.createElement("li");
    li.innerHTML = "Hola"
    padre.appendChild(li);

}

 */



///ada
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
        existenDatos ? almacenarStorage(donantesLocalStorage, cliente) : almacenarStorage(donaciones, cliente);

    }
}
function setLocalStorage(array) {
    localStorage.setItem('Donaciones', JSON.stringify(array));
}
let mostrarDonantes = document.getElementById('mostrarDonantes')
let listaDonantes = document.getElementById('listaDonantes')

function mostrarNombres(arrayStorage) {

    mostrarDonantes.classList.remove('ocultar')

    for (donante of arrayStorage) {
        let li = document.createElement('li')
        li.innerHTML = donante.nombre
        listaDonantes.appendChild(li)
    }
}