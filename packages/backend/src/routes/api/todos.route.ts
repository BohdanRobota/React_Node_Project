import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { isExist } from '../../middlewares/isExist.middleware';
import { Todo } from '../../entities/Todo.entity';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodos.bind(todoController));
todosRouter.get('/:id', isExist(Todo), todoController.getTodoById.bind(todoController));
todosRouter.post('/', todoController.createTodo.bind(todoController));
todosRouter.delete('/:id', isExist(Todo), todoController.deleteTodoById.bind(todoController));
todosRouter.put('/:id', isExist(Todo), todoController.updateTodoById.bind(todoController));

export default todosRouter;
