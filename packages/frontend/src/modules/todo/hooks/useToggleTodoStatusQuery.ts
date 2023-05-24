import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/hooks/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { IToggleTodo } from '../types/todo.type';

export const useToggleTodoStatusQuery = () => {
  const showError = useToastError();
  const todoService = new TodoService();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (toggleData: IToggleTodo) => todoService.toggleTodoStatus(toggleData),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.TODOS]),
    onError: showError
  });
};
