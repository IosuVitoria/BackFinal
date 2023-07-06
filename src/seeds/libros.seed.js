const Libro = require('../api/models/libro.model');
const mongoose = require('mongoose');

const arrayLibros = [
    
    {
        "_id": "64774b18cc6ec0c950ad6146",
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "_id": "64774bc01813ce46a49d20ce",
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "_id": "647858b9612e5b163ff3c9f4",
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "_id": "647859252aa02f66e2266dbb",
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    },
    {
        "genero": "Romantico",
        "tipo": "Teatro",
        "titulo": "Don Juan Tenorio"
    },
    {
        "titulo": "El señor de las moscas",
        "tipo": "Novela",
        "genero": "Fantasía",
    },
    {
        "titulo": "50 sombras mas oscuras",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685609684/libreria/utnpcidggdpumv9twf6f.jpg"
    },
    {
        "titulo": "50 sombras de grey",
        "tipo": "Novela",
        "genero": "Romantico",
        "portada": "https://res.cloudinary.com/dpeadveub/image/upload/v1685608738/libreria/tnzvg2wuuepuluwqtc0d.jpg",
    },
    {
        "titulo": "El señor de los anillos: La comunidad del anillo",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        "titulo": "El señor de los anillos: Las dos torres",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
        "titulo": "El señor de los anillos: El retorno del Rey",
        "tipo": "Novela",
        "genero": "Fantasía",
        "portada": "https://www.planetadelibros.com/usuaris/libros/fotos/325/m_libros/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202203111320.jpg",
    }
]


mongoose.connect('mongodb+srv://root:root@cluster0.imov6up.mongodb.net/libreria?retryWrites=true&w=majority')
.then(async () => {
    const allLibros = await Libro.find()
    if(allLibros.length > 0){
        await Libro.collection.drop()
        console.log('libros borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const librosMap = arrayLibros.map((libro) => new Libro(libro))
    await Libro.insertMany(librosMap)
    console.log('libros añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());