import * as express from 'express'
import home from '../modules/api/home/router';

const app = express();

app.use('/', home);

export default app