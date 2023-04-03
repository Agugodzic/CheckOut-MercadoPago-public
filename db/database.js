import Sequelize from "sequelize";
import mysql2 from 'mysql2';

const db = new Sequelize('DATABASE_NAME', 'DATABASE_USERNAME' , 'DATABASE_PASSWORD', {
  host: 'DATABASE_HOST',
 // port: '3306',
  password: 'DATABASE_PASSWORD',
  dialect: 'mysql',
  dialectModule: mysql2,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

export default db;