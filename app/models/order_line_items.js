import { DataTypes } from 'sequelize';
import { sequelize } from './instance.js';
import { Order } from './order.js';
import { Product } from './product.js';
import { ProductVariant } from './product_variants.js';

export const OrderLineItem = sequelize.define(
  'OrderLineItem',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
    },
    variant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ProductVariant,
        key: 'id',
      },
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Order,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shop_money: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'OrderLineItems' },
);
