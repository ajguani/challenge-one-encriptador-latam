const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.querySelector(".copiar");
const obtenerValorTexto = document.querySelector(".input-texto");
const mostrarMensajeTextoDos = document.getElementById("mensaje");

btnEncriptar.addEventListener("click", function () {
    console.log("encriptar");
    const encriptando = encriptar(obtenerValorTexto.value);
    //console.log(encriptando.toLowerCase());
    mostrarMensajeTextoDos.value = encriptando.toLowerCase();
    obtenerValorTexto.value = "";
    mostrar();
});

btnDesencriptar.addEventListener("click", function () {
    console.log("desencriptar");
    const desencriptando = desencriptar(obtenerValorTexto.value);
    // console.log(desencriptando);
    mostrarMensajeTextoDos.value = desencriptando.toLowerCase();
    obtenerValorTexto.value = "";
    mostrar();
});

btnCopiar.addEventListener("click", function () {
    console.log("copiar");
    mostrarMensajeTextoDos.select();
    navigator.clipboard.writeText(mostrarMensajeTextoDos.value);
    mostrarMensajeTextoDos.value = "";
    ocultar();
});

function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDesencriptada.includes(matrixCode[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDesencriptada
}

function mostrar() {
    document.getElementById("ocultar").style.display = 'none';
    document.getElementById("mostrar").style.display = 'block';
}

function ocultar() {
    document.getElementById("mostrar").style.display = 'none';
    document.getElementById("ocultar").style.display = 'block';
}