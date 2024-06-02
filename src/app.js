import express from "express";
import routes from "./routes";
import {resolve} from 'path'
import cors from 'cors'
import './database'
class App {
  constructor() {
    this.app = express(); //disponibiliza com o this para exportar o express fora do constructor
    this.app.use(cors());
    this.middlewares(); //chama a middlewares ao iniciar
    this.routes(); //chama a routes ao iniciar
    
  }

  middlewares() {
    this.app.use(express.json()); //está utilizando o express
    this.app.use('/product-file',
    express.static(resolve(__dirname, '..','uploads')))

    this.app.use('/category-file',
    express.static(resolve(__dirname, '..','uploads')))


  }
  routes() {
    this.app.use(routes);
  }
}
export default new App().app; //o método constructor é chamado
