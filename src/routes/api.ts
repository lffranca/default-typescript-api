import express from 'express'
import auth from '../modules/api/home/router';

const app = express();

app.use('/auth', auth);

export default app