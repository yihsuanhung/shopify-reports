import { DataTypes } from 'sequelize';
import { sequelize } from './instance.js';
import { Product } from './product.js';

export const ProductVariant = sequelize.define(
  'ProductVariant',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.STRING,
      references: {
        model: Product,
        key: 'id',
      },
    },
    sku: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'ProductVariants',
  },
);
