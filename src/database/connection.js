import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize(
  process.env.DB_BASE, //DATABASE-BANCO DE DADOS
  process.env.DB_USER, //USUARIO por padrão vem como postgres(owner em propriedades do banco de dados podendo ser alterada.)
  process.env.DB_PASS, //SENHA BANCO DE DADOS
  {
    host: process.env.DB_LOCAL, //URL DO MEUS DADOS
    port: 5432, //PORTA QUE ESTÁ O BANCO DE DADOS
    dialect: "postgres", //QUAL BANCO DE DADOS QUE O SEQUELIZE ESTÁ TRABALHANDO,PODERIA SER OUTRO CM MARIA, MYSQL E ETC... AKI NO CASO É POSTGREE
  }
);
