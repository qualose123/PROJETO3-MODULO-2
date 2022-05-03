//importando express após instalar com o npm
import express from "express";
//quando importar uma constante de outra rota tem que colocar entre chaves para informar que está importanto apenas a constante e ao fim sempre colocar a extensão, no caso abaixo routes.js
import { routers } from "./src/routes/routes.js";
// essa e uma lib q ja vem instalada, aki ela so foi importadada
import path from "path";
//aki foi criada uma variavel para reconhecer pastas
let __dirname = path.resolve(path.dirname(""));

//instanciando express em uma constante
const app = express();
//criação da constante com a porta do servidor
const port = 3001;

app.set("view engine", "ejs");
app.use(routers); //aki está pedindo ao express instanciar pra usar a constante routers.
//aki o express está juntando a pasta padrão q é views, com a pasta public e utilizar os arquivos estáticos da mesma
app.use(express.static(path.join(__dirname, "public")));
//criação de servidor na porta 3001
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
