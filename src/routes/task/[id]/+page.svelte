<script>
  import TaskForm from '$lib/TaskForm.svelte';
  export let data;
</script>

<h1>Editar Tarea</h1>

{#if data.task}
  <TaskForm task={data.task} />
{:else}
  <p>Tarea no encontrada.</p>
{/if}

<style>
    h1 {
        text-align: center;
    }
</style>
