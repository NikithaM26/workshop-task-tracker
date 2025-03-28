function TaskTable({ tasks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-4 py-2 border">{task.title}</td>
              <td className="px-4 py-2 border">{task.description}</td>
              <td className="px-4 py-2 border">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
