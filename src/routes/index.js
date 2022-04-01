import express from "express";
import {router} from "./livrosRoutes.js"
import { routerAutores } from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) =>{
        res.status(200).send({titulo:"Curso de Noje.js"})
    });

    app.use(
        express.json(),
        router,
        routerAutores
        // livros
    );
}

export {routes}