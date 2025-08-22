export function createTask(task) {
  return {
    id: crypto.randomUUID(),
    task,
    completed: false,
    createdAt: Date.now(),
  };
}
