'use strict'
const Comentario= use('App/Models/Comentario')
class ComentarioController {
    async index ({ response }) {
      
        const comentarios = await Comentario.all()
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los comentarios",
          data: comentarios
        })
        // return view.render('marcas.index', { marcas: marcas.toJSON() })
      }
    
      async store ({ request, response, session }) {
       
        // Guardar en la base de datos
        const comentarios= new Comentario()
        comentarios.descripcion = request.input('descripcion')
        await comentarios.save()
    
        return response.json({
          status: true,
          mensaje: "Se guardo el comentario",
          data: comentarios
        })
      }
     //modificar
    //   async update({params, request, response}) {
    //     const comenyarios = await Comentario.find(params.id)
    //    comenyarios.descripcion = request.input('descripcion')
    
    //     await comenyarios.save()
    
    //     return response.json({
    //       status: true,
    //       mensaje: "Se actualizo el gene",
    //       data: generos
    //     })
    //   }
    //borrar marca
      async destroy ({ params, response }) {
        const comentarios = await Comentario.find(params.id)
        // generos.nombre = request.input('nombre'),
        // generos.descripcion = request.input('descripcion')
        await comentarios.delete()
    
        return response.json({
          status: true,
          mensaje: "Se elimino el comentario",
          data: comentarios
        })
      }
    
    }
module.exports = ComentarioController
