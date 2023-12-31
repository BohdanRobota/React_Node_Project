/* eslint-disable no-console */

import { BaseEntity } from 'typeorm';
import { Todo } from '../entities/Todo.entity';
import { ITodo } from '../types/todos.type';
import { UpdateTodoDto, CreateTodoDto } from '../dto/todo';
import { TodoCategories, TodosQuery } from '../types/todoStatus.type';

class TodoService {
  async getAll(query: TodosQuery): Promise<ITodo[]> {
    const options: any = { where: { ...query } };
    if (!options) delete options.where;
    return Todo.find(options);
  }

  async getById(id: string): Promise<Todo | null> {
    return Todo.findOneBy({ id });
  }

  async getCompleted() {
    return Todo.find({ where: { isComplete: true } });
  }


  async deleteById(id: string) {
    await Todo.delete({ id });
    return { message: 'Todo has been successfully deleted', id };
  }

  async create(todoDto: CreateTodoDto): Promise<BaseEntity> {
    return Todo.create(todoDto as object).save();
  }

  async updateById(id: string, todoDto: UpdateTodoDto) {
    await Todo.update(id, todoDto);
    return { message: 'Todo has been successfully updated', id, todoDto };
  }
}

export default new TodoService(); // eslint-disable-line
