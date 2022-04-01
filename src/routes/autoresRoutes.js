import express from "express";
import { AutorController } from "../controllers/autoresController.js";

const routerAutores = express.Router();

routerAutores.get("/autores", AutorController.listarAutores)
      .post("/autores", AutorController.cadastrarAutor)
      .put("/autores/:id", AutorController.atualizarAutor)
      .get("/autores/:id", AutorController.listarAutorId)
      .delete("/autores/:id",AutorController.excluirAutor);

export {routerAutores};