import { Router } from 'express';
import userController from '../../controllers/user.controller';
import { tryCatch } from '../../middlewares/tryCatch.middleware';

const userRouter: Router = Router();

userRouter.post('/register', tryCatch(userController.register.bind(userController)));
userRouter.post('/login', tryCatch(userController.login.bind(userController)));
userRouter.post('/logout', tryCatch(userController.logout.bind(userController)));
userRouter.get('/activate/:link', tryCatch(userController.activate.bind(userController)));
userRouter.get('/refresh', tryCatch(userController.refresh.bind(userController)));
userRouter.get('/users', tryCatch(userController.getAllUsers.bind(userController)));
userRouter.post('/change-password', tryCatch(userController.changePassword.bind(userController)));

export default userRouter;
