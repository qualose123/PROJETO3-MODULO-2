import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize(
  // process.env.DB_URL
  'postgres://qualose123:fXHYdrC5n9jAttDBMXjpbUBYFT2c4loK@dpg-c9rb25c6fj3b5pho9rs0-a.oregon-postgres.render.com/mcu',
  {
      dialect: 'postgres',
      dialectOptions: {
          ssl: {
              require: true,
              rejectUnauthorized: false
          }
      }
  }
)