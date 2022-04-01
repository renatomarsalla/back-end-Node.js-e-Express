import {livros} from "../models/Livro.js"

class LivroController{

    // static listarLivros = (req, res) =>{
    //     livros.find((err, livross) =>{
    //         res.status(200).json(livross);
    //     });
    // }

    static listarLivros = (req, res) =>{
        livros.find().populate('autor')
        .exec((err, livross) =>{
            res.status(200).json(livross);
        });
    }

    // static listarLivroId = (req, res) =>{
    //     const id = req.params.id;
    //     livros.findById(id, (err, livroId)=>{
    //         if(err){
    //             res.status(400).send({message:`${err.message} - livro não encontrado`});
    //         }
    //         else{
    //             res.status(200).send(livroId);
    //         }
            
    //     })
    // }

    static listarLivroId = (req, res) =>{
        const id = req.params.id;
        livros.findById(id).populate('autor', 'nome')
         .exec((err, livroId)=>{
            if(err){
                res.status(400).send({message:`${err.message} - livro não encontrado`});
            }
            else{
                res.status(200).send(livroId);
            }
            
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) =>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar o livro`});
            }
            else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id,{$set: req.body},(err) => {
            if(!err){
                res.status(200).send("Livro atualizado com sucesso");
            }
            else{
                res.status(500).send({message: `${err.message} - falha ao atualizar o livro`});
            }
        })
    }

    static excluirlivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message:"Livro excluido com sucesso"});
            }
            else{
                res.status(500).send({message: `${err.message} - não foi possivel excluiro o livro`});
            }
        })
    }

    static listarPorEditora = (req, res) =>{
        const editora = req.query.editora;
        livros.find({'editora':editora}, {}, (err,livros) =>{
            res.status(200).send(livros);
        })
    }

    

}

export {LivroController}