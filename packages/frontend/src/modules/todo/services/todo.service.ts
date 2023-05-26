import { AxiosResponse } from 'axios';
import { HttpService } from '../../common/services/http.service';
import { ITodo, ITodoCeateDto, ITodoUpdateDto, IToggleTodo } from '../types/todo.type';
import { BACKEND_KEYS } from '../../common/consts/app-keys.const';
import { TodoState } from '../types/todo.state.type.';

export class TodoService extends HttpService {
  getTodos(state: TodoState): Promise<AxiosResponse<ITodo[]>> {
    const queries = state === 'all' ? '' : `/?completed=${state === 'completed'}`;
    console.log(queries);
    return this.get({
      url: `todos${queries}`
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

  toggleTodoStatus(toggleData: IToggleTodo): Promise<AxiosResponse<ITodo>> {
    return this.patch({
      url: BACKEND_KEYS.TODOS + toggleData.id,
      data: toggleData.status
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
