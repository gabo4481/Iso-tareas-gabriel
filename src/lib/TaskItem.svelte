<script>
  export let task;
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="task-item">
  <div>
    <strong>{task.text}</strong>
    <p>{task.completed ? 'Completado' : 'No completado'}<span>{task.completed ? '✔️' : '❌'}</span></p>
  </div>

  <div class="container-buttons">
    <a href={`/task/${task.id}`}>
      <Button style="secondary">Editar</Button>
    </a>

    <form method="POST" action="?/deleteTodo">
      <input type="hidden" name="id" value={task.id} />
      
      <Button type="submit" style="danger" >Eliminar</Button>
    </form>
  </div>
</div>

<style>
  .task-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }

  .container-buttons {
    display: flex;
    gap: 1rem;
  }

</style>
