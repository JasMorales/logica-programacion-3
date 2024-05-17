document.getElementById('calcular').addEventListener('click', function() {
    let inputNumero = prompt("Ingresa un número: ");
    let numero = parseInt(inputNumero);

    let elementoResultado = document.getElementById('resultado');
    
    if (isNaN(numero)) {
        elementoResultado.textContent = "Por favor, ingresa un NUMERO.";
    } else {
        let factorial = calcularFactorial(numero);

        elementoResultado.textContent = `El factorial de ${numero} es ${factorial}.`;
    }
});

function calcularFactorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
