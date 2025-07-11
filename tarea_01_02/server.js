import http from 'http'
import * as api from './api.js'
import {router} from './router.js'

const port = 3000;

const server = http.createServer((request, response) => {
	//api.home(request, response);
    router(request, response);
});

server.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});