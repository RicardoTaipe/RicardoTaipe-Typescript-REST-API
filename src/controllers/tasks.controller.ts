import { Handler } from "express";
import Task from "../models/task";
import { Types } from "mongoose";

export const getTasks: Handler = async (req, res, next) => {
  const tasks = await Task.find();
  return res.json(tasks);
};

export const createTask: Handler = async (req, res, next) => {
  const { name, description } = req.body;
  const task = new Task({
    _id: new Types.ObjectId(),
    name,
    description,
  });
  try {
    const newTask = await task.save();
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTask: Handler = async (req, res, next) => {
  const id = req.params.id;
  try {
    const task = await Task.findOne({ id });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const deleteTask: Handler = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedTask = await Task.deleteOne({ id });
    return res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const updateTask: Handler = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedTask = await Task.updateOne({ id });
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const countTasks: Handler = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks.length);
  } catch (error) {
    return res.status(404).json(error);
  }
};
