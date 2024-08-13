const { TaskData } = require("../utils/taskData");

const getTasks = (req, res) => {
  res.send(TaskData);
};

const createTask = async (req, res) => {
  res.send("Hitting post request to create the task");
};
const updateTask = async (req, res) => {
  res.send(`Hitting put request to update the task ${req.params.id}`);
};
const deleteTask = async (req, res) => {
  let taskafterDeletion = TaskData.todos.filter(
    (task) => task.id != req.params.id
  );
  res.status(200).send({
    data: taskafterDeletion,
    message: `task with Id ${req.params.id} is deleted successfully`,
  });
};
module.exports = { getTasks, createTask, updateTask, deleteTask };
