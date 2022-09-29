import { Sequelize } from 'sequelize';

console.log(process.env.DB_HOST)

export default new Sequelize(
  'postgres',
  'postgres',
  'root',
  {
    dialect: 'postgres',
    host: 'database',
    port: 5432,
  }
);
