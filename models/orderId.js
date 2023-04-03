import db from "../db/database.js"
import DataTypes from "sequelize";

  const orderId = db.define(
    "orderPaymentId",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymentId: {
        type: DataTypes.STRING,
      },
    }
  );

  export default orderId;