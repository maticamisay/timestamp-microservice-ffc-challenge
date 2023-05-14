module.exports = function (req, res, next) {
  const { date } = req.params;
  // Verificamos si es una date de tiempo
  // console.log(date);
  if (/^\d+$/.test(date)) {
    // Convertimos la date de tiempo a un objeto Date
    const fechaObjeto = new Date(Number(date));

    // Formateamos la fecha al formato "YYYY-MM-DD"
    const fecha = fechaObjeto.toISOString().split("T")[0];
    // console.log(fechaObjeto);
    // Modificamos la ruta de la solicitud

    req.params.date = fecha;
  }

  next();
};
