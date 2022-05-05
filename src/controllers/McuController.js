//essa parte vão ficar os controladores, geralmente vem como req, res
import { connection } from "../database/connection.js";
import { mcu } from "../model/mcu.js";

export const getIndex = async (req, res) => {
  try {
    const listFilmes = await mcu.findAll();
    console.log(listFilmes);
    res.render("index.ejs", { listFilmes });
  } catch (error) {
    res.send(error.message);
  }
};
export const getDetalhes = async (req, res) => {
  try{
    console.log(req.params.id)
    const filmesDetalhes= await mcu.findByPk(req.params.id)
    console.log(filmesDetalhes)
    res.render('detalhes.ejs',{filmesDetalhes})
  }catch(error){
    res.send(error.message)
  }
  
 
};

