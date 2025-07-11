import * as api from './api.js'

export const routes = {
	'': api.home,
	'products':api.products //La clave es la ruta, y el valor es la funcion que creamos en api.
}