'use strict'
const Database = use('Database')
const Artista = use('App/Models/Artista')
class ArtistaController {
    async index ({ response }) {
        const artistas = await Database.table('artistas as a' ).innerJoin('estados as e', 'a.lugarnacimiento', 'e.id').select("a.id","a.nombre","a.edad","a.descripcion","e.nombre as estado")
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los artistas",
          data:artistas
        })
        // return view.render('marcas.index', { marcas: marcas.toJSON() })
      }
    
      async store ({ request, response, session }) {
    
        // Guardar en la base de datos
        const artistas = new Artista()
        
        artistas.nombre = request.input('nombre'),
        artistas.edad = request.input('edad'),
        artistas.descripcion = request.input('descripcion')
        artistas.lugarnacimiento = request.input('lugarnacimiento')
        await artistas.save()

        return response.json({
          status: true,
          mensaje: "Se guardo el artista",
          data: artistas
        })
      
      }
     //modificar
      async update({params, request, response}) {
        const artistas = await Artista.find(params.id)
        artistas.nombre = request.input('nombre'),
        artistas.edad = request.input('edad'),
        artistas.descripcion = request.input('descripcion')
        artistas.lugarnacimiento = request.input('lugarnacimiento')

        await artistas.save()

        return response.json({
          status: true,
          mensaje: "Se actualizo el artista",
          data: artistas
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const artistas = await Artista.find(params.id)
        await artistas.delete()
 
        return response.json({
          status: true,
          mensaje: "Se elimino el artista",
          data: artistas
        })
       
      }
    
    }
module.exports = ArtistaController
