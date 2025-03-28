import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5005/api/v1'
});

export const fetchTasks = () => api.get('/tasks');
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (taskId, updatedTask) => api.put(`/tasks/${taskId}`, updatedTask);
export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);

export default api;