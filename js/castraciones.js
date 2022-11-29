///CASTRACIONES
const BASE_CASTN = '../data/cast.json'


let btnConsultar = document.getElementById('btnConsultar')
btnConsultar.addEventListener('click', mostrarLugar)

function mostrarLugar() {
    let item = document.getElementById('direccionEditar')
    if (item) {
        window.open('https://google.com/maps/place/' + item.value, '_blank');
    }
    return false; //No ejecutar el evento.
}

fetch(BASE_CASTN)
    .then(response => response.json())
    .then(json => showCharacters(json));

const showCharacters = (huellitaJson) => {
    let div = document.getElementById("castracion");
    for (const huellita of huellitaJson) {
        let div2 = document.createElement("div");
        div2.innerHTML = `<article class="fotosC">
                            <img src="${huellita.imagen}" alt="${huellita.id}, ${huellita.nombre}" class="imagenCast">
                            <div class="textoCast">
                                <div class="motivoCast">${huellita.nombre}</div>
                                <div class="desCast">${huellita.descripcion}.</div>
                            </div>
                        </article>`;
        div.appendChild(div2);
    }
}