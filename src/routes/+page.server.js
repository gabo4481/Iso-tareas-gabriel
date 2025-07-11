import { getTasks, addTask, deleteTask } from '$lib/task.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { tasks: getTasks() };
}

/** @type {import('./$types').Actions} */
export const actions = {
  addTodo: async ({ request }) => {
    const form = await request.formData();
    const text = form.get('taskText');
    if (!text) return { error: 'Tarea vacía' };

    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false
    };

    addTask(newTask);
    return { success: true };
  },

  deleteTodo: async ({ request }) => {
    const form = await request.formData();
    const id = form.get('id');
    deleteTask(id);
    return { success: true };
  }
};
