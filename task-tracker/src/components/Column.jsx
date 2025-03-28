import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

function Column({ status, tasks }) {
  const { setNodeRef } = useDroppable({
    id: status,
    data: { status }
  });

  return (
    <div ref={setNodeRef} className="bg-white rounded shadow p-2 flex-1">
      <h2 className="text-xl font-semibold mb-2">{status}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
