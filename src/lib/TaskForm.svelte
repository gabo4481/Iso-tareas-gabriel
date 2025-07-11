<script>
  import InputField from '$lib/InputField.svelte';
  import Button from '$lib/Button.svelte';

  export let task;
</script>

<form method="POST" action="?/editTodo" class="edit-task-form">
  <input type="hidden" name="id" value={task.id} />

  <div class="field">
    <label for="text">Texto de la tarea:</label>
    <InputField id="text" name="text" value={task.text} />
  </div>

  <div class="field">
    <label for="completed">Estado:</label>
    <select name="completed" id="completed">
      <option value="false" selected={!task.completed}>No completado ❌</option>
      <option value="true" selected={task.completed}>Completado ✔️</option>
    </select>
  </div>

  <Button type="submit" style="primary">Guardar Cambios</Button>
</form>

<style>
  .edit-task-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    background-color: #f3f3f3;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .field {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
</style>
