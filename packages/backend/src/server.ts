import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import { errorHandler } from './middlewares/ErrorHandling.middleware';
import AppRouter from './routes';
import connectDB from './config/database';

const app = express();
const router = new AppRouter(app);

connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();
app.use(errorHandler);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
