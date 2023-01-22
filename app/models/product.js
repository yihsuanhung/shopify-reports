import { DataTypes } from 'sequelize';
import { sequelize } from './instance.js';

export const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  { tableName: 'Products' },
);
