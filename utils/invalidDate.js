function validarFechaInvalida(entrada) {
  let fechaObjeto;

  // Verificamos si la entrada es una marca de tiempo Unix
  if (/^\d+$/.test(entrada)) {
    // Convertimos la marca de tiempo Unix a un objeto Date
    // Multiplicamos por 1000 para convertir de segundos a milisegundos
    fechaObjeto = new Date(Number(entrada) * 1000);
  } else if (entrada.includes("-")) {
    // La entrada es una fecha en formato "YYYY-MM-DD"
    fechaObjeto = new Date(entrada);
  } else {
    // La entrada no es una fecha válida
    return true;
  }

  // Comprobamos si la fecha es válida
  // Date.prototype.getTime retornará NaN para fechas no válidas
  // y isNaN retornará true si su argumento es NaN
  return isNaN(fechaObjeto.getTime());
}

module.exports = validarFechaInvalida;
