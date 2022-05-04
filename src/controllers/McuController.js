//essa parte vão ficar os controladores, geralmente vem como req, res
import { connection } from "../database/connection.js";
import { mcu } from "../model/Mcu.js";

export const getIndex = async (req, res) => {
  const filmes = await connection.query("SELECT * FROM mcu",
  {model:mcu});
  console.log(filmes[0])
  res.render("index.ejs");
};
