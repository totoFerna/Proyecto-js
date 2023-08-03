function calcularPrecioConImpuestos() {
    
    const precioInicial = parseFloat(document.getElementById('precio-inicial').value);
    const tasaImpuesto = 0.75; 
    
    const impuestosCalculados = precioInicial * tasaImpuesto;
    const precioFinal = precioInicial + impuestosCalculados;

    document.getElementById('precio-final').textContent = `El precio final, incluyendo impuestos, es $${precioFinal.toFixed(2)}`;
}

document.getElementById('calcular-btn').addEventListener('click', calcularPrecioConImpuestos);