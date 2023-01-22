import { readFileSync } from 'fs';
import { sequelize } from './instance.js';
import { Order } from './order.js';
import { OrderLineItem } from './order_line_items.js';
import { Product } from './product.js';
import { ProductVariant } from './product_variants.js';

/**
 * import json data into db
 */
const importDataToDb = async () => {
  const orders = JSON.parse(readFileSync('./data/orders.json'));
  const products = JSON.parse(readFileSync('./data/products.json'));

  const productData = [];
  const orderData = [];
  const productVariantData = [];
  const orderLineItemData = [];

  // import products to db
  for (const product of products.data) {
    productData.push({
      id: String(product.id),
    });

    if (product?.variants && product?.variants.length > 0) {
      for (const variant of product.variants) {
        productVariantData.push({
          id: String(variant.id),
          product_id: String(variant.product_id),
          sku: variant.sku,
        });
      }
    }
  }

  // import orders to db
  for (const order of orders.data) {
    const { id, created_at, updated_at } = order;
    orderData.push({
      id: String(id),
      createdAt: new Date(created_at),
      updatedAt: new Date(updated_at),
    });

    if (order?.line_items && order?.line_items.length > 0) {
      for (const item of order.line_items) {
        const { product_id, variant_id, order_id, quantity, price_set, sku } =
          item;

        orderLineItemData.push({
          id: String(item.id),
          product_id: String(product_id),
          variant_id: String(variant_id),
          order_id: String(order_id),
          quantity,
          shop_money: Number(price_set?.shop_money?.amount || 0),
          sku: String(sku),
        });
      }
    }
  }

  Order.bulkCreate(orderData);
  OrderLineItem.bulkCreate(orderLineItemData);
  Product.bulkCreate(productData);
  ProductVariant.bulkCreate(productVariantData);
};

const setupAssociations = () => {
  Order.hasMany(OrderLineItem);
  OrderLineItem.belongsTo(Order);
  Product.hasMany(ProductVariant);
  ProductVariant.belongsTo(Product);
};

export const initDb = async () => {
  await sequelize.sync({ force: true }); // aware in production
  await importDataToDb();
};
