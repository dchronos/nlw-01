import path from "path";
import express from "express";
import routes from "./routes";
import cors from "cors";
import { errors } from "celebrate";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(errors());

//JSON
//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT Atualizar uma informacao existente no backend
//DELETE: Remover uma informacao do backend

// Request params: parâmetros que vem na própria rota que identificam um recurso
// Query Param: Sao parametros que vem na propria rota geralmente opcionais para filtros, paginação...
// Request body: parametros para criacao/atualizacao de informacoes

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')

// const users = ["Luiz", "Kheslen", "Carlos"];

// app.get("/users", (request, response) => {
//   const search = String(request.query.search);
//   const filteredUsers = search
//     ? users.filter((users) => users.includes(search))
//     : users;

//   console.log("Listagem de usuários");

//   return response.json(filteredUsers);
// });

// app.get("/users/:id", (request, response) => {
//   const id = Number(request.params.id);
//   return response.json(users[id]);
// });

// app.post("/users", (request, response) => {
//   const data = request.body;
//   console.log(data);

//   const user = {
//     name: data.name,
//     email: data.email,
//   };

//   return response.json(user);
// });

app.listen(3333);
