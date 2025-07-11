
let tasks = [
  { id: '1', text: 'Ponerle 20 a Gabriel en SvelteKit', completed: false },
  { id: '2', text: 'Entregar proyecto final', completed: true }
];

export function getTasks() {
  return tasks;
}

export function getTaskById(id) {
  return tasks.find(t => t.id === id);
}


export function addTask(task) {
  tasks.push(task);
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

export function editTask(id, text, completed) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.text = text;
    task.completed = completed;
  }
}

export function getTaskById(id) {
  return tasks.find(t => t.id === id);
}
