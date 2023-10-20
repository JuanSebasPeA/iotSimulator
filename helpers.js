//Función para generar datos aleatorios del consumo(entre 60 y 100)

function generarConsumo() {
    return Math.floor(Math.random() * (500000 - 200000 + 1)) + 200000
}

module.exports = { generarConsumo };