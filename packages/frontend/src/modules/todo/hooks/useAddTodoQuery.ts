import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../services/todo.service';
import { ITodoCeateDto } from '../types/todo.type';
import { useToastError } from '../../common/errors/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useAddTodoQuery = (data: ITodoCeateDto) => {
  const showError = useToastError();
  const todoService = new TodoService();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => todoService.createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    },
    onError: showError
  });
};
