import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './db';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript</h1>');
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
