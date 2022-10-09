import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './db';
import { activityRouter } from './routes/activity.router';
import { departmentRouter } from './routes/department.router';
import { positionRouter } from './routes/position.router';
import { userRouter } from './routes/user.router';
import { walletRouter } from './routes/wallet.router';
import * as models from './models';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRouter);
app.use('/wallet', walletRouter);
app.use('/departments', departmentRouter);
app.use('/positions', positionRouter);
app.use('/activity', activityRouter);

// Catch all server errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(500)
    .json({
      message: `Server error: ${err}`,
      data: []
    });
  console.log(err.message);
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Running on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
