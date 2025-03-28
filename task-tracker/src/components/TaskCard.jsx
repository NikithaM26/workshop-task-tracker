import { useDraggable } from '@dnd-kit/core';

function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: task.id
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="p-2 bg-gray-50 border rounded">
      <h3 className="font-medium">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );
}

export default TaskCard;
