// src/routes/tareas/[id]/+page.server.js
import { getTaskById, editTask, getTasks } from '$lib/task.js';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const task = getTaskById(params.id);
    console.log('DEBUG load task id:', params.id);
    console.log('DEBUG task found:', task);
    console.log('DEBUG task found:', getTasks());

  if (!task) {
    throw error(404, 'Tarea no encontrada');
  }

  return { task };
}

/** @type {import('./$types').Actions} */
export const actions = {
  editTodo: async ({ request }) => {
    const form = await request.formData();
    const id = form.get('id');
    const text = form.get('text');
    const completed = form.get('completed') === 'true';

    editTask(id, text, completed);

    throw redirect(303, '/');
  }
};
