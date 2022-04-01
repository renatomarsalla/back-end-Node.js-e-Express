import {autores} from "../models/Autor.js"

class AutorController{

    static listarAutores = (req, res) =>{
        autores.find((err, autoress) =>{
            res.status(200).json(autoress);
        });
    }

    static listarAutorId = (req, res) =>{
        const id = req.params.id;
        autores.findById(id, (err, autorId)=>{
            if(err){
                res.status(400).send({message:`${err.message} - autor não encontrado`});
            }
            else{
                res.status(200).send(autorId);
            }
            
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) =>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar o autor`});
            }
            else{
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id;
        autores.findByIdAndUpdate(id,{$set: req.body},(err) => {
            if(!err){
                res.status(200).send("autor atualizado com sucesso");
            }
            else{
                res.status(500).send({message: `${err.message} - falha ao atualizar o autor`});
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message:"autor excluido com sucesso"});
            }
            else{
                res.status(500).send({message: `${err.message} - não foi possivel excluiro o autor`});
            }
        })
    }

    

}

export {AutorController}