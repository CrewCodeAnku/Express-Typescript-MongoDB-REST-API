import { RequestHandler } from "express";

import Todo, { TodoModel } from "../models/todos";

export const createToDo: RequestHandler = async (req, res, next) => {
  console.log("Req", req);
  const data: TodoModel = req.body;
  console.log("Data", data);
  var todos = await Todo.create(data);
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};
