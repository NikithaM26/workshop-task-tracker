const express = require("express");
const router = express.Router();
const Task = require("../models/Tasks");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving tasks" });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: "Error creating task" });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Error updating task" });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting task" });
  }
});

module.exports = router;
