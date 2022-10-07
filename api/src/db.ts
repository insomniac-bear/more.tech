import { Sequelize } from 'sequelize';

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
