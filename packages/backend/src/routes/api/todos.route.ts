import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodos.bind(todoController));
todosRouter.get('/:id', todoController.getTodoById.bind(todoController));
todosRouter.post('/', todoController.createTodo.bind(todoController));
todosRouter.delete('/:id', todoController.deleteTodoById.bind(todoController));
todosRouter.put('/:id', todoController.updateTodoById.bind(todoController));

export default todosRouter;
