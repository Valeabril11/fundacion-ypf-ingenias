const loading = document.getElementById('loading')
const spinner = document.getElementById('spinner')

window.addEventListener('DOMContentLoaded', verificarCargaDom);

function verificarCargaDom() {
    setTimeout(() => {
        console.log('DOM cargado')
        removerOcultarPagina()
    }, 1000);
}

function removerOcultarPagina() {
    loading.classList.remove('ocultar')
    spinner.classList.add('ocultar')
}


