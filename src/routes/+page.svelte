<script>
	import InputField from '$lib/InputField.svelte';
	import Button from '$lib/Button.svelte';
	import TaskItem from '$lib/TaskItem.svelte';
	let taskText = '';
    export let data; // Esto viene de load()

    let tasks = data.tasks;
    
</script>

<div class="main-container">
	<h1>Mi Gestor de Tareas</h1>

	<form method="POST" action="?/addTodo" class="add-task-form">
		<div class="container-input-button">
			<div class="input-wrapper">
				<InputField placeholder="Escribe tu tarea" bind:value={taskText} name="taskText" />
			</div>
			<div class="button-wrapper">
				<Button type="submit" variant="primary">Agregar Tarea</Button>
			</div>
		</div>
	</form>

	<!-- Mostrar lista de tareas -->
	{#each tasks as task}
		<TaskItem {task} />
	{/each}
</div>

<style>
	/* Centrado general del contenido */
	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		margin-bottom: 1.5rem;
		text-align: center;
		font-size: 2rem;
	}

	.add-task-form {
		width: 100%;
		margin-bottom: 3rem;
	}

	.container-input-button {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		justify-content: center;
		width: 100%;
		
	}

	.input-wrapper {
		flex-grow: 2;
	}

	.button-wrapper {
		flex-shrink: 0;
	}
</style>
