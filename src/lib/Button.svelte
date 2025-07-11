<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props con valores por defecto
	export let text = 'Botón';
	export let type = 'submit'; 
    export let style= 'primary';
	export let disabled = false;

	// Función local que dispara un evento personalizado
	function handleClick() {
		if (!disabled) {
			dispatch('buttonclick');
		}
	}
</script>

<button class={style} type={type} on:click={handleClick} {disabled} aria-disabled={disabled}>
	<slot>{text}</slot>
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 1.8rem;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		gap: 0.5rem;
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}

	/* Estilos para el botón primario */
	.primary {
		background: #0070f3;
		color: white;
	}

	.primary:hover:not(:disabled) {
		background: #0060d9;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
	}

	/* Estilos para el botón secundario */
	.secondary {
		background: #f0f0f0;
		color: #333;
		border: 1px solid #ddd;
	}

	.secondary:hover:not(:disabled) {
		background: #e0e0e0;
		transform: translateY(-2px);
	}

    .danger {
		background: #ff0000;
		color: #ffffff;
		border: 1px solid #ddd;
	}

	.danger:hover:not(:disabled) {
		background: #e0e0e0;
		transform: translateY(-2px);
	}
</style>
