function realizarOperaciones() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    const operacion = prompt("Ingrese la operación deseada (+, -, *, /, %):");

    let resultado;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "%":
            resultado = (num1 * num2) / 100;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    alert(`Resultado de ${num1} ${operacion} ${num2} = ${resultado}`);
}
