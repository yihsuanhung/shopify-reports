import Sequelize from 'sequelize';
// import dbConfig from '../../config/db.config.js';

export const sequelize = new Sequelize('reports', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 6603,
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle,
  // },
});
