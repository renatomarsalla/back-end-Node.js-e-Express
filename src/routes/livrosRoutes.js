import express from "express";
import { LivroController } from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros)
      .post("/livros", LivroController.cadastrarLivro)
      .get("/livros/busca", LivroController.listarPorEditora)
      .put("/livros/:id", LivroController.atualizarLivro)
      .get("/livros/:id", LivroController.listarLivroId)
      .delete("/livros/:id",LivroController.excluirlivro);
      

export {router};