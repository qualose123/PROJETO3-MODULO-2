//essa parte vão ficar os controladores, geralmente vem como req, res
// import { render } from "express/lib/response";
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
  try {
    console.log(req.params.id);
    const filmesDetalhes = await mcu.findByPk(req.params.id);
    console.log(filmesDetalhes);
    res.render("detalhes.ejs", { filmesDetalhes });
  } catch (error) {
    res.send(error.message);
  }
};
export const getDeletar = async (req, res) => {
  try {
    // await connection.query(`DELETE FROM mcu WHERE id=${req.params.id}`)
    await mcu.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getcadastro= (req,res)=> {
  console.log(req.body)
  res.render('cadastro.ejs')
}

export const postcadastro= async(req,res)=> {
  try{
    const {nome_filme,nome_autores,nome_atores,ano_filme,imagem,iframe}=req.body

    //aki é uma das formas:
    // await connection.query(`INSERT INTO mcu (nome_filme, nome_autores, nome_atores, ano_filme,imagem, iframe) VALUES('${nome_filme}', '${nome_autores}', '${nome_atores}', ${ano_filme}, '${imagem}', '${iframe}')`)   

    if(!nome_filme || !nome_autores || !nome_atores || !ano_filme || !imagem ||!iframe){
      res.send('Todos os campos são obrigatórios')
    }else{

    // forma mais simples
    await mcu.create({nome_filme,nome_autores,nome_atores,ano_filme,imagem,iframe})
    }
  }catch(error){
    res.send(error.message)
  }
}

export const getEditar = async (req, res) => {
  try {
      const filmeAtual = await mcu.findByPk(req.params.id)
      res.render('editar.ejs', {
          filmeAtual
      })
  } catch (error) {
      res.send(error.message)
  }
}

export const postEditar = async (req, res) => {
  try {
      const {
          nome_filme,
          nome_autores,
          nome_atores,
          ano_filme,
          imagem,
          iframe
      } = req.body
      await filmes.update({
        nome_filme: nome_filme,
        nome_autores: nome_autores,
        nome_atores: nome_atores,
        ano_filme:  ano_filme,
        imagem: imagem,
          iframe: iframe
      }, {
          where: {
              id: req.params.id
          }
      })
      res.redirect('/')
  } catch (error) {
      res.send(error.message)
  }
}