/* eslint-disable no-console */

import { BaseEntity } from 'typeorm';
import { Todo } from '../entities/Todo.entity';
import { ITodo } from '../types/todos.type';
import { UpdateTodoDto, CreateTodoDto } from '../dto/todo';

export default class TodoService {
  async getAllTodos(): Promise<ITodo[]> {
    return Todo.find();
  }

  async getTodoById(id: string): Promise<ITodo | null> {
    return Todo.findOneBy({ id });
  }

  async deleteTodoById(id: string) {
    await Todo.delete({ id });
    return { message: 'Todo has been successfully deleted', id };
  }

  async createTodo(todoDto: CreateTodoDto): Promise<BaseEntity> {
    return Todo.create(todoDto as object).save();
  }

  async updateTodoById(id: string, todoDto: UpdateTodoDto) {
    await Todo.update(id, todoDto);
    return { message: 'Todo has been successfully updated', id, todoDto };
  }
}
