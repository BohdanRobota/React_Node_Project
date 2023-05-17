/* eslint-disable no-console */

import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { UpdateTodoDto, CreateTodoDto } from '../dto/todo';
import { ITodo } from '../types/todos.type';
import { todoValidate } from '../validations/todo.validations';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodos(_: Request, res: Response) {
    try {
      const todos: ITodo[] = await this.todoService.getAll();
      console.log('Get all Todos');
      res.json(todos);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  async getTodoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const todo: ITodo | null = await this.todoService.getById(id);
      console.log('Get Todo');
      res.json(todo);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  async deleteTodoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const todo = await this.todoService.deleteById(id);
      console.log('Delete Todo');
      res.json(todo);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  async updateTodoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const todoDto: UpdateTodoDto = req.body;
      const errors = todoValidate(todoDto);
      if (errors) throw errors;
      const todo = await this.todoService.updateById(id, todoDto);
      console.log('Update Todo');
      res.json(todo);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  async createTodo(req: Request, res: Response) {
    try {
      const todoDto: CreateTodoDto = req.body;
      const errors = todoValidate(todoDto);
      if (errors) throw errors;
      const newTodo = await this.todoService.create(todoDto);
      console.log('Created new Todo');
      res.json(newTodo);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
