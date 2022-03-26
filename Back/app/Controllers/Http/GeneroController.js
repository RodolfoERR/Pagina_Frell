'use strict'
const Genero = use('App/Models/Genero')
const { validate } = use('Validator')
class GeneroController {
    async index ({ response }) {
      
        const generos = await Genero.all()
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los generos",
          data: generos
        })
        // return view.render('marcas.index', { marcas: marcas.toJSON() })
      }
    
      async store ({ request, response, session }) {
        // Validación para los datos de entrada
        // const validation = await validate(request.all(), {
        //   nombre: 'required|min:3|max:255'
        // })
      
        // Mostrar mensajes de error si falla la validación
        // if (validation.fails()) {
        //   session.withErrors(validation.messages())
        //           .flashAll()
        //   return response.redirect('back')
        // }
      
        // Guardar en la base de datos
        const generos = new Genero()
        
        generos.nombre = request.input('nombre'),
        generos.descripcion = request.input('descripcion')
        await generos.save()
    
        return response.json({
          status: true,
          mensaje: "Se guardo el genero",
          data: generos
        })
      
        // Guaradar mensaje de éxito
        // session.flash({ notification: '¡Marca agregada con éxito!' })
      
        // return response.redirect('back')
      }
     //modificar
      async update({params, request, response}) {
        const generos = await Genero.find(params.id)
       generos.nombre = request.input('nombre'),
       generos.descripcion = request.input('descripcion')
    
        await generos.save()
    
        return response.json({
          status: true,
          mensaje: "Se actualizo el genero",
          data: generos
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const generos = await Genero.find(params.id)
        // generos.nombre = request.input('nombre'),
        // generos.descripcion = request.input('descripcion')
        await generos.delete()
    
        return response.json({
          status: true,
          mensaje: "Se elimino el genero",
          data: generos
        })
        // Guaradar mensaje de éxito
        // session.flash({ notification: '¡Marca eliminada con éxito!' })
        // return response.redirect('back')
      }
    
    }


module.exports = GeneroController
