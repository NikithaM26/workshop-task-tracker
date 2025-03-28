import { DndContext } from '@dnd-kit/core';
import Column from './Column';

function TaskBoard({ tasks, updateTask }) {
  const columns = ['Todo', 'In Progress', 'Done'];

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const task = tasks.find((t) => t.id === active.id);
      if (task) {
        const newStatus = over.data.current?.status;
        if (newStatus && newStatus !== task.status) {
          updateTask({ ...task, status: newStatus });
        }
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {columns.map((status) => (
          <Column key={status} status={status} tasks={tasks.filter((t) => t.status === status)} />
        ))}
      </div>
    </DndContext>
  );
}

export default TaskBoard;
