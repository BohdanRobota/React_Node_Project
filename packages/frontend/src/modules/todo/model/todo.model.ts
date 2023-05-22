import { ITodo } from '../types/todo.type';

class TodoModel {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private isComplete: boolean,
    private isPrivate: boolean
  ) {}
}

const createTodoModel = (todoFromServer: ITodo) =>
  new TodoModel(
    todoFromServer.id,
    todoFromServer.title,
    todoFromServer.description,
    todoFromServer.isComplete,
    todoFromServer.isPrivate
  );

export { createTodoModel };

export default TodoModel;
