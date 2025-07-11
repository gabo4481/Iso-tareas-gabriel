<!-- src/routes/+layout.svelte -->
<script>
	// Importa el store 'page' de SvelteKit, que contiene información sobre la página actual.
	// Aunque está importado, no se está usando directamente en este layout, pero es útil para, por ejemplo,
	// resaltar el NavLink activo.
	import { page } from '$app/stores';

	// Importa tu componente NavLink personalizado desde la ruta de la librería.
	import NavLink from '$lib/NavLink.svelte';
</script>

<nav>
	<!-- Componentes NavLink para la navegación principal -->
	<NavLink href="/">Inicio</NavLink>
	<NavLink href="/about">Acerca</NavLink>
</nav>

<main>
	<!--
        El elemento <slot /> es crucial en los layouts de SvelteKit.
        Aquí es donde SvelteKit inyectará el contenido de las páginas hijas
        (es decir, el contenido de tus archivos +page.svelte).
    -->
	<slot />
</main>

<footer>
	<!-- Pie de página con el año actual -->
	<p>{new Date().getFullYear()} Mi App Gabriel Mendoza</p>
</footer>

<style>

	nav {
		display: flex; 
		gap: 1.5rem; 
		padding: 1.5rem; 
		background: #f8f9fa; 
		border-bottom: 1px solid #eaeaea; 
		justify-content: center; 
		flex-wrap: wrap; 
	}


	main {
		max-width: 1200px; /* Ancho máximo del contenido */
		margin: 0 auto; /* Centra el contenedor horizontalmente */
		padding: 2rem; /* Relleno interno */
		min-height: calc(
			100vh - 100px - 100px
		); 
	}

	
	footer {
		text-align: center; /* Centra el texto */
		padding: 2rem; /* Relleno interno */
		margin-top: 3rem; /* Margen superior para separarlo del contenido */
		border-top: 1px solid #eaeaea; /* Borde superior sutil */
		color: #666; /* Color de texto más oscuro */
		font-size: 0.9rem; /* Tamaño de fuente más pequeño */
	}
</style>
