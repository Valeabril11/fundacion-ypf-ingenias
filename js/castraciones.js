///CASTRACIONES
let btnConsultar = document.getElementById('btnConsultar')
btnConsultar.addEventListener('click', mostrarLugar)

function mostrarLugar() {
    let item = document.getElementById('direccionEditar')
    if (item) {
        window.open('https://google.com/maps/place/' + item.value, '_blank');
    }
    return false; //No ejecutar el evento.
}