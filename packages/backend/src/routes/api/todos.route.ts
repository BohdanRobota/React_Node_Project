import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { isExist } from '../../middlewares/isExist.middleware';
import { Todo } from '../../entities/Todo.entity';
import { tryCatch } from '../../middlewares/tryCatch.middleware';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodos.bind(todoController)));
todosRouter.get(
  '/:id',
  tryCatch(isExist(Todo)),
  tryCatch(todoController.getTodoById.bind(todoController))
);
todosRouter.post('/', tryCatch(todoController.createTodo.bind(todoController)));
todosRouter.delete(
  '/:id',
  tryCatch(isExist(Todo)),
  tryCatch(todoController.deleteTodoById.bind(todoController))
);
todosRouter.put(
  '/:id',
  tryCatch(isExist(Todo)),
  tryCatch(todoController.updateTodoById.bind(todoController))
);

export default todosRouter;
