const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/** 
 * Rota / Recurso
**/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT:Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 **/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/** 
 * Bancos de dados: 
 * SQL> MySQL, SQLite, Postgresql, Oracle, Microsoft SQL SERVER
 * NoSQL> MongoDB, CouchDB, etc...
 */

/**
 *  Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 */

 

//MODIFICAÇÃO AQUI

const PORT = process.env.PORT || 3333
app.listen(PORT,() => {
   console.log('Servidor rodando!');
});

//MONGODB ADDED

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<deploy>:<Senh@kk1>@rest-2ullt.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true },);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});