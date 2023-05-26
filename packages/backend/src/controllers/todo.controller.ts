/* eslint-disable no-console */

import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

export class TodoController {
  constructor(private todoService: typeof TodoService) { }

  async getAllTodos(req: Request, res: Response) {
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
    const updatedTodo = await this.todoService.updateById(id, req.body);
    res.json(updatedTodo);
  }

  async createTodo(req: Request, res: Response) {
    const newTodo = await this.todoService.create(req.body);
    res.json(newTodo);
  }
}

const todoController = new TodoController(TodoService);
export default todoController;
