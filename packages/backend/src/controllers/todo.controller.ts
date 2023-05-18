/* eslint-disable no-console */

import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';
import { createTodoValidate, updateTodoValidate } from '../validations/todo.validations';
import ApiError from '../error/ApiError';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodos(_: Request, res: Response) {
    const todos: ITodo[] = await this.todoService.getAll();
    res.send(todos);
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const todo: ITodo | null = await this.todoService.getById(id);
    res.json(todo);
  }

  async deleteTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const todo = await this.todoService.deleteById(id);
    res.json(todo);
  }

  async updateTodoById(req: Request, res: Response) {
    const { id } = req.params;
    const { error, value } = updateTodoValidate(req.body);
    if (error) throw ApiError.validationError(error);
    const updatedTodo = await this.todoService.updateById(id, value);
    res.json(updatedTodo);
  }

  async createTodo(req: Request, res: Response) {
    const { error, value } = createTodoValidate(req.body);
    if (error) throw ApiError.validationError(error);
    const newTodo = await this.todoService.create(value);
    res.json(newTodo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
