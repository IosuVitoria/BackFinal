const { deleteFile } = require('../../middlewares/delete.file');
const Libro = require('../models/libro.model');

// const getLibros = async(req,res) => {
//     try {
//         const allLibros = await Libro.find();
//         return res.status(200).json(allLibros);
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }


//GET PAGINADO
const getLibros = async(req,res) => {
    try {
        //Recoger querys de numero de pagina(page) y limite por pagina(limit)
        let {page, limit} = req.query;
        
        //Contar el numero de elementos en mi coleccion
        const numLibros = await Libro.countDocuments();
        
        //Si no está seteado seteo el limite a 10
        limit = limit ? parseInt(limit) || 10 : 10;

        //Comprobar el numero máximo de paginas dependiendo de mi limite
        let numPages = numLibros%limit > 0 ? numLibros/limit + 1 : numLibros/limit;

        //Si no está seteado seteo el numero de pagina a 1
        page = page > numPages ? numPages : page < 1 ? 1 :  parseInt(page) || 1;
        // if(page > numPages){
        //     page = numPages;
        // }else if(page < 1){
        //     page = 1
        // }else{
        //     page = page
        // }

        // Calculo el salto(skip) que tengo que dar a mi find para empezar a partir del elemento que quiero
        const skip = (page - 1) * limit;

        const allLibros = await Libro.find().skip(skip).limit(limit);
        const response = {
            info: {
                numLibros: numLibros,
                page: page,
                limit: limit,
                nextPage: numPages >= page + 1 ? `/libros?page=${page + 1}&limit=${limit}` : null,
                previusPage: page != 1 ? `/libros?page=${page - 1}&limit=${limit}` : null
            },
            results: allLibros
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postLibros = async(req,res) => {
    try {
        console.log(req.file)
        const newLibro = new Libro(req.body);
        if(req.file){
            newLibro.portada = req.file.path;
        }
        const createdLibro = await newLibro.save();
        return res.status(201).json(createdLibro);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putLibros = async(req,res) => {
    try {
        const {id} = req.params;
        const putLibro = new Libro(req.body);
        putLibro._id = id;        
        if(req.file){
            putLibro.portada = req.file.path;
        }
        const updatedLibro = await Libro.findByIdAndUpdate(id, putLibro)
        if(!updatedLibro){
            return res.status(404).json({message: "El id de este libro no existe"});
        }
        if(updatedLibro.portada !== putLibro.portada){
            deleteFile(updatedLibro.portada);
        }
        return res.status(200).json(updatedLibro);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteLibros = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedLibro = await Libro.findByIdAndDelete(id);
        if(!deletedLibro){
            return res.status(404).json({message: "El id del libro no existe"});
        }
        return res.status(200).json(deletedLibro)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getLibros, postLibros, putLibros, deleteLibros}