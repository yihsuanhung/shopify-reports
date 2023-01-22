import { DataTypes } from 'sequelize';
import { sequelize } from './instance.js';

export const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  { tableName: 'Orders' },
);
