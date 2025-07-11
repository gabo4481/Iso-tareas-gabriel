<script>
	// Importa el store 'page' de SvelteKit, que contiene información sobre la URL actual.
	import { page } from '$app/stores';

	// Propiedad 'href' que debe ser proporcionada al usar este componente,
	// por ejemplo, <NavLink href="/about">Acerca</NavLink>.
	export let href;

	// Reactividad: Determina si el enlace está activo.
	// '$:' es la sintaxis de Svelte para declaraciones reactivas.
	// 'isActive' será verdadero si la ruta actual del navegador coincide con el 'href' del enlace.
	$: isActive = $page.url.pathname === href;
</script>

<a {href} class:active={isActive} aria-current={isActive ? 'page' : undefined}>
	<slot />
</a>

<style>
	/* Estilos base para el enlace */
	a {
		text-decoration: none; /* Elimina el subrayado predeterminado */
		color: #333; /* Color de texto predeterminado */
		font-weight: 500; /* Grosor de la fuente */
		padding: 0.5rem 0; /* Relleno vertical */
		position: relative; /* Necesario para el pseudo-elemento ':after' */
		transition: color 0.3s; /* Transición suave para el color al pasar el ratón */
	}

	/* Estilos al pasar el ratón por encima del enlace */
	a:hover {
		color: #0070f3; /* Cambia el color del texto a azul */
	}

	/* Estilos específicos para el enlace activo */
	a.active {
		color: #0070f3; /* Mantiene el color azul para el enlace activo */
	}

	/* Pseudo-elemento para la línea inferior del enlace activo */
	a.active::after {
		content: ''; /* Contenido vacío para el pseudo-elemento */
		position: absolute; /* Posicionamiento absoluto respecto al enlace padre */
		bottom: -1px; /* Ligeramente debajo del texto */
		left: 0;
		right: 0;
		height: 3px; /* Grosor de la línea */
		background: #0070f3; /* Color de la línea (azul) */
		border-radius: 3px; /* Bordes redondeados para la línea */
	}
</style>
