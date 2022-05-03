import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const mcu = connection.define("mcu", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_filme: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome_autores: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome_atores: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano_filme: {
    type: Sequelize.INTERGER,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
  timestamps: false
});
