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



app.listen(3333);