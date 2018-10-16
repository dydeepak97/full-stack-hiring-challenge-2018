const server = require('./server')
const routes = require('./routes')
const database = require('./model/db')
const create = require('./model/create')

const app = server.app

const b = database.db;

//database.setupDB();