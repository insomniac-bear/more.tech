import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './db';
import { userRouter } from './routes/user.router';
import * as models from './models';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRouter);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Running on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
