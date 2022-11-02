let btn = document.getElementById("btnTexto");

btn.addEventListener("click", mostrarContenedor);


function mostrarContenedor() {

    console.log("hiciste click");
    let contenedor = document.getElementById("contenedor");
    contenedor.style.display = "block";
}

btn.addEventListener("dblclick", cambiar)
function cambiar() {
    document.getElementById("contenedor").style.display = "none";
}
document.getAnimations("btnTexto").dblclick = function () {
    cambiar();
}

