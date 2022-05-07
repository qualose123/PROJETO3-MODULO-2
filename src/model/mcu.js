import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const mcu = connection.define(
  "mcu",
  {
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
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iframe: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true, // Ele vai procurar no banco de dados exatamente a tabela que está dentro do .define na constante acima, sem ele o Sequelize iria procurar no geral e levaria mais tempo, por isso ele ta como true, as colunas abaixo são criadas automaticamente, e foram colocadas false para não serem criadas.
    createdAt: false, //É UMA COLUNA QUE É CRIADA AUTOMATICAMENTE E INFOMA QUANDO FOI CRIADA UMA LINHA NO SEU CÓDIGO.
    updatedAt: false, //INFORMA QUANDO QUE FOI ATUALIZADA UMA INFORMAÇÃO.
    timestamps: false, //INFORMA TODA VEZ QUE FIZER QUALQUER TIPO DE ALTERAÇÃO, APARECE A DATA, HR, EXIBIÇÃO E ETC.
  }
);

const initTable = async () => {
  try {
      await mcu.sync()
  }
  catch(error){
      error.message
  }
}

initTable()

