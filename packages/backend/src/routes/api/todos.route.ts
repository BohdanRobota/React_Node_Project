import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { isExist } from '../../middlewares/isExist.middleware';
import { Todo } from '../../entities/Todo.entity';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import { validationMiddleware } from '../../middlewares/validation.middleware';
import { updateTodoValidate, createTodoValidate } from '../../validations/todo.validations';
import { uuidValidationMiddleware } from '../../middlewares/uuidValidation.middleware';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodos.bind(todoController)));
todosRouter.get(
  '/:id',
  tryCatch(uuidValidationMiddleware()),
  tryCatch(isExist(Todo)),
  tryCatch(todoController.getTodoById.bind(todoController))
);

todosRouter.post(
  '/',
  tryCatch(validationMiddleware(createTodoValidate)),
  tryCatch(todoController.createTodo.bind(todoController))
);
todosRouter.delete(
  '/:id',
  tryCatch(uuidValidationMiddleware()),
  tryCatch(isExist(Todo)),
  tryCatch(todoController.deleteTodoById.bind(todoController))
);
todosRouter.patch(
  '/:id',
  tryCatch(uuidValidationMiddleware()),
  tryCatch(isExist(Todo)),
  tryCatch(validationMiddleware(updateTodoValidate)),
  tryCatch(todoController.updateTodoById.bind(todoController))
);

export default todosRouter;
