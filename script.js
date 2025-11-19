function grausParaRadianos(g) {
    return g * Math.PI / 180;
}

function calcular() {
    let graus = parseFloat(document.getElementById("angulo").value);
    let tipo = document.getElementById("funcao").value;

    if (isNaN(graus)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido.";
        return;
    }

    let rad = grausParaRadianos(graus);
    let valor;

    if (tipo === "sin") valor = Math.sin(rad);
    if (tipo === "cos") valor = Math.cos(rad);
    if (tipo === "tan") valor = Math.tan(rad);

    document.getElementById("resultado").innerHTML =
        `<strong>Resultado:</strong> ${valor.toFixed(6)}`;
}
