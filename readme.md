# Microservicio de Marca de Tiempo

Este proyecto es una implementación del desafío de freeCodeCamp de construir un microservicio de marca de tiempo. Acepta una fecha como entrada en dos formatos diferentes: una cadena en formato "YYYY-MM-DD" o una marca de tiempo Unix en milisegundos. Devuelve un objeto JSON que contiene la fecha en formato Unix y UTC.

## Cómo utilizar el servicio

Para utilizar el servicio, realiza una solicitud GET a la ruta `/api/:date?`, donde `:date?` es la fecha que deseas convertir. Si `:date?` es una cadena en formato "YYYY-MM-DD", el servicio la interpretará como una fecha. Si `:date?` es una cadena de caracteres numérica, el servicio la interpretará como una marca de tiempo Unix en milisegundos. Si no proporcionas `:date?`, el servicio devolverá la fecha y hora actuales.

El servicio te responderá con un objeto JSON que contiene la fecha en formato Unix (la clave `unix`) y UTC (la clave `utc`).

Por ejemplo, una solicitud a `/api/1451001600000` devolverá `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`.

## Cómo manejar los errores

Si proporcionas una cadena que no se puede interpretar como una fecha válida, el servicio responderá con un objeto JSON que tiene la estructura `{ error : "Invalid Date" }`.

## Cómo instalar y ejecutar el proyecto localmente

1. Clona este repositorio.
2. Navega hasta el directorio del repositorio en tu terminal.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Ejecuta `npm start` para iniciar el servidor.
5. Abre un navegador web y visita `http://localhost:3000/api/:date?`, reemplazando `:date?` con la fecha que deseas convertir.

## Tecnologías utilizadas

Este proyecto utiliza Node.js y Express para el servidor y el enrutamiento.

## Reconocimientos
Este proyecto fue creado como parte de las certificaciones de freeCodeCamp. Gracias a freeCodeCamp por proporcionar la plantilla del proyecto y el conjunto de pruebas.