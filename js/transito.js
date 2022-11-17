const BASE_URL = '../data/data.json'

fetch(BASE_URL)
    .then(response => response.json())
    .then(json => showCharacters(json));

const showCharacters = (huellitaJson) => {
    let div = document.getElementById("huellita");
    for (const huellita of huellitaJson) {
        let div2 = document.createElement("div");
        div2.innerHTML = `<article class="fotos">
                            <img src="${huellita.imagen}" alt="${huellita.id}, ${huellita.nombre}" class="imagen">
                            <div class="textoCard">
                                <div class="nombre">${huellita.nombre}</div>
                                <div class="descripcion">${huellita.descripcion}.</div>
                            </div>
                        </article>`;
        div.appendChild(div2);
    }
}