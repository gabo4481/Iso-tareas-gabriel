import { parser } from './parser.js';

let fibPrev = 0, fibCurrent = 1;
let arrayProducts = []

function randomRangeNumber() {
    return Math.floor(Math.random() * (50 - 1 + 1) + 1);
}

function nextFibonacci() {
    const next = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = next;
    return next;
}




export const home = async (request, response) => {
    response.setHeader("Content-Type", "application/json");
    switch (request.method) {
        case "GET":
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    objeto: "objeto numero 1",
                    message: "Solicitud GET recibida!",
                    informacion: {
                        name: "Profe pongame 20",
                        age: 30,
                        email: "nota.20@example.com",
                    },
                    numeroRamdom: randomRangeNumber(),
                    fibonacciNumero: nextFibonacci(),
                })
            );

            break;

        case "POST":
            let data = await parser(request);
            console.log(data)  //Imprimimos en consola la data, que ahora es un objeto.
            response.statusCode = 201;
            response.end(
                JSON.stringify({
                    objeto: "objeto numero 2",
                    message: "Solicitud POST recibida!",
                    informacion: {
                        id: "1234567890",
                        title: "nUEVO rECURSO",
                        description: "Simulando POST",
                    },
                    numeroRamdom: randomRangeNumber(),
                    fibonacciNumero: nextFibonacci(),
                })
            );
            break;

        case "PUT":
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    objeto: "objeto numero 3",
                    message: "Solicitud PUT recibida!",
                    informacion: {
                        id: "1234567890",
                        title: "Update rECURSO",
                        description: "Simulando PUT a recurso",
                    },
                    numeroRamdom: randomRangeNumber(),
                    fibonacciNumero: nextFibonacci(),
                })
            );
            break;

        case "DELETE":
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    objeto: "objeto numero 4",
                    message: "Solicitud Delete recibida!",
                    informacion: {
                        description: "Recurso Borrado",
                    },
                    numeroRamdom: randomRangeNumber(),
                    fibonacciNumero: nextFibonacci(),
                })
            );
            break;

        default:
            response.statusCode = 404;
            response.end(
                JSON.stringify({
                    message: "Not found",
                })
            );

    }
};

export const products = async (request, response) => {
    //Acá ya podríamos hacer lo que queramos, por ahora solo voy a retornar
    //un mensaje.

    switch (request.method) {
        case ("GET"):
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify({
                products: arrayProducts
            }));
            break;

        case ("POST"):
            try {
                let data = await parser(request);

                /* estructura 
                {
                    "nombre": "queso",
                    "precio": 10
                }
                */

                // Validación básica
                if (
                    !data.nombre || typeof data.nombre !== "string" || data.nombre.trim() === "" ||
                    typeof data.precio !== "number" || data.precio <= 0
                ) {
                    response.writeHead(400, { "Content-Type": "application/json" });
                    response.end(JSON.stringify({
                        error: "Datos inválidos. Se requiere un nombre (string no vacío) y un precio (número > 0).",
                    }));
                    return;
                }

                arrayProducts.push(data);
                response.writeHead(201, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ message: "Producto agregado exitosamente", producto: data }));
            } catch (err) {
                response.writeHead(400, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ error: "Error al procesar el cuerpo de la solicitud" }));
            }
            break;

        default:
            response.writeHead(405);
            response.end(JSON.stringify({ error: "request no permitida, solo GET y POST" }));
            break;
    }
}


