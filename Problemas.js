function problema1() {
    const input = document.getElementById("p1-input");
    const textoIngresado = input.value.trim();
    
    if (textoIngresado === "") {
        alert("Por favor ingresa palabras separadas por espacios.");
        return;
    }

    const palabras = textoIngresado.split(" ");
    const palabrasInvertidas = palabras.map(palabra => palabra.split('').reverse().join('')).join(' ');

    document.getElementById("p1-output").textContent = "Las palabras invertidas son: " + palabrasInvertidas;
}

function problema2() {
    var p2_x1 = parseFloat(document.querySelector("#p2-x1").value);
    var p2_x2 = parseFloat(document.querySelector("#p2-x2").value);
    var p2_x3 = parseFloat(document.querySelector("#p2-x3").value);
    var p2_x4 = parseFloat(document.querySelector("#p2-x4").value);
    var p2_x5 = parseFloat(document.querySelector("#p2-x5").value);

    var p2_y1 = parseFloat(document.querySelector("#p2-y1").value);
    var p2_y2 = parseFloat(document.querySelector("#p2-y2").value);
    var p2_y3 = parseFloat(document.querySelector("#p2-y3").value);
    var p2_y4 = parseFloat(document.querySelector("#p2-y4").value);
    var p2_y5 = parseFloat(document.querySelector("#p2-y5").value);

    // Formamos los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    // Ordenamos los vectores de forma descendente
    v1 = v1.sort(function(a, b) {
        return b - a;
    });
    v2 = v2.sort(function(a, b) {
        return b - a;
    });

    // Invertimos el segundo vector
    v2 = v2.reverse();

    // Recorremos v1 y multiplicamos por el inverso de v2
    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    // Mostramos el resultado
    document.querySelector("#p2-output").textContent ="El producto escalar mínimo es de: " + p2_producto;
}
function problema3() {
    const input = document.getElementById("p3-input");
    const textoIngresado = input.value.toUpperCase().replace(/\s/g, ''); // Eliminar espacios en blanco
    
    const caracteresValidos = /^[A-Z,]+$/;
    if (!caracteresValidos.test(textoIngresado)) {
        alert("Solo se permiten letras en mayúsculas y separadas por comas.");
        return;
    }

    const palabras = textoIngresado.split(",");
    let maxCaracteresUnicos = 0;
    let palabraConMasCaracteresUnicos = "";

    for (const palabra of palabras) {
        const caracteres = new Set(palabra);
        if (caracteres.size > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteres.size;
            palabraConMasCaracteresUnicos = palabra;
        }
    }

    document.getElementById("p3-output").textContent = `La palabra con más caracteres únicos es: ${palabraConMasCaracteresUnicos} con ${maxCaracteresUnicos} caracteres únicos.`;
}