////formulario parte - adoptar
let inputOpcionHuellitas = document.getElementById('opcionHuellitas')

let divAdoptar = document.getElementById('divAdoptar')
let divCastrar = document.getElementById('divCastrar')
let divTransito = document.getElementById('divTransito')
let divInfo = document.getElementById('divInfo')


inputOpcionHuellitas.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(inputOpcionHuellitas.value)
    switch (inputOpcionHuellitas.value) {
        case ('value1'):
            divAdoptar.classList.remove('ocultar')
            divCastrar.classList.add('ocultar')
            divTransito.classList.add('ocultar')
            divInfo.classList.add('ocultar')
            break;
        case ('value2'):
            divAdoptar.classList.add('ocultar')
            divCastrar.classList.remove('ocultar')
            divTransito.classList.add('ocultar')
            divInfo.classList.add('ocultar')
            break;
        case ('value3'):
            divAdoptar.classList.add('ocultar')
            divCastrar.classList.add('ocultar')
            divTransito.classList.remove('ocultar')
            divInfo.classList.add('ocultar')
            break;
        case ('value4'):
            divAdoptar.classList.add('ocultar')
            divCastrar.classList.add('ocultar')
            divTransito.classList.add('ocultar')
            divInfo.classList.remove('ocultar')
            break;
        default:
            divAdoptar.classList.add('ocultar')
            divCastrar.classList.add('ocultar')
            divTransito.classList.add('ocultar')
            divInfo.classList.add('ocultar')
            break;
    }

})

////formulario parte- transito
// hacer que solo permita una sola opcion del checkbox
let transitoO = document.getElementById('ofrecerTransito')
let transitoN = document.getElementById('necesitarTransito')
transitoO.addEventListener('click', () => {
    if (transitoO.checked != false) {
        transitoN.checked = null;
    }
})
transitoN.addEventListener('click', () => {
    if (transitoN.checked != false) {
        transitoO.checked = null;
    }
})

