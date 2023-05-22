import { AxiosResponse } from 'axios';
import { HttpService } from '../../common/services/http.service';
import { ITodo, ITodoCeateDto, ITodoUpdateDto } from '../types/todo.type';
import { BACKEND_KEYS } from '../../common/consts/app-keys.const';

export class TodoService extends HttpService {
  getTodos(): Promise<AxiosResponse<ITodo[]>> {
    return this.get({
      url: BACKEND_KEYS.TODOS
    });
  }

  getTodoById(id: string): Promise<AxiosResponse<ITodo>> {
    return this.get({
      url: BACKEND_KEYS.TODOS + id
    });
  }

  updateTodo(id: string, data: ITodoUpdateDto): Promise<AxiosResponse<ITodo>> {
    return this.patch({
      url: BACKEND_KEYS.TODOS + id,
      data
    });
  }

  toggleTodo(id: string, isComplete: boolean): Promise<AxiosResponse<ITodo>> {
    return this.patch({
      url: BACKEND_KEYS.TODOS + id,
      data: { isComplete }
    });
  }

  deleteTodo(id: string) {
    return this.delete({
      url: BACKEND_KEYS.TODOS + id
    });
  }

  createTodo(data: ITodoCeateDto): Promise<AxiosResponse<ITodo>> {
    return this.post({
      url: BACKEND_KEYS.TODOS,
      data
    });
  }
}
