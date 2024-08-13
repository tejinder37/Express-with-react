const Router = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const taskRouter = Router();

taskRouter.get("/task", getTasks);
taskRouter.post("/task", createTask);
taskRouter.put("/task/:id", updateTask);
taskRouter.delete("/task/:id", deleteTask);

module.exports = taskRouter;
