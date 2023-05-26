import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../services/todo.service';
import { ITodoCeateDto } from '../types/todo.type';
import { useToastError } from '../../common/hooks/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useAddTodoQuery = () => {
  const showError = useToastError();
  const todoService = new TodoService();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ITodoCeateDto) => todoService.createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: showError
  });
};
