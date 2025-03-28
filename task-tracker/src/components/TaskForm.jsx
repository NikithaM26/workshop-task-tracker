import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    const newTask = { id: uuidv4(), title, description, status: 'Todo' };
    addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col md:flex-row gap-2">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" className="border p-2 rounded flex-1" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" className="border p-2 rounded flex-1" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
