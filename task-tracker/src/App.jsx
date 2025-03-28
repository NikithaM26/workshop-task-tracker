import { useState } from 'react';
import TaskBoard from './components/TaskBoard';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [viewMode, setViewMode] = useState('kanban');

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === updatedTask.id ? updatedTask : task));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Task Tracker</h1>
          <div>
            <button onClick={() => setViewMode('kanban')} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Kanban</button>
            <button onClick={() => setViewMode('table')} className="px-4 py-2 bg-blue-500 text-white rounded">Table</button>
          </div>
        </div>
        <TaskForm addTask={addTask} />
        {viewMode === 'kanban' ? (
          <TaskBoard tasks={tasks} updateTask={updateTask} />
        ) : (
          <TaskTable tasks={tasks} />
        )}
      </div>
    </div>
  );
}

export default App;
