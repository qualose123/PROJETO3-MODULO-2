//essa pasta vão ficar as rotas do código

import express from "express";
/*esse .Router só pega os métodos http como get e post
esse export, ele está exportando a constante para que o index.js reconheça essa constante e só funciona em arquivos JS*/
export const routers = express.Router()
//aki estou importando a constante da rota controlador
import {getIndex} from '../controllers/McuController.js'

//conectando a rota index
routers.get("/",getIndex)
  

