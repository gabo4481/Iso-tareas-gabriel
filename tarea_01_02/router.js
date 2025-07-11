import url from 'url';
import {routes} from './routes.js'

export const router = (request, response) => {
	const parsedUrl = url.parse(request.url, true);
	const path = parsedUrl.pathname;
	const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const handler = routes[trimmedPath];
    if(handler) {
		handler(request, response); //Llamamos a la funcion encontrada.
	} else {
		res.writeHead(404); //Respondemos con un 404 en caso contrario.
		res.end('Not Found'); 
	}
}
