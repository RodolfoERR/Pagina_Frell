'use strict'
const Marca = use('App/Models/Marca')
const { validate } = use('Validator')
class MarcaController {

    async index ({ response }) {
        const marcas = await Marca.query().select("id","nombre", "descripcion").fetch()
        return response.json({
          status: true,
          mensaje: "Se obtuvieron las marcas",
          data: marcas
        })
        // return view.render('marcas.index', { marcas: marcas.toJSON() })
      }

      async show ({ response, params }) {
        const marcas = await Marca.query().select("id","nombre", "descripcion").where({id: params.id}).first()
        return response.json({
          status: true,
          mensaje: "Se obtuvieron las marcas",
          data: marcas
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
        const marcas = new Marca()
        
        marcas.nombre = request.input('nombre'),
        marcas.descripcion = request.input('descripcion')
        await marcas.save()

        return response.json({
          status: true,
          mensaje: "Se guardo la marca",
          data: marcas
        })
      
        // Guaradar mensaje de éxito
        // session.flash({ notification: '¡Marca agregada con éxito!' })
      
        // return response.redirect('back')
      }
     //modificar
      async update({params, request, response}) {
        const marcas = await Marca.find(params.id)
        marcas.nombre = request.input('nombre'),
        marcas.descripcion = request.input('descripcion')

        await marcas.save()

        return response.json({
          status: true,
          mensaje: "Se actualizo la marca",
          data: marcas
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const marcas = await Marca.find(params.id)
        // marcas.nombre = request.input('nombre'),
        // marcas.descripcion = request.input('descripcion')
        await marcas.delete()
 
        return response.json({
          status: true,
          mensaje: "Se elimino la marca",
          data: marcas
        })
        // Guaradar mensaje de éxito
        // session.flash({ notification: '¡Marca eliminada con éxito!' })
        // return response.redirect('back')
      }
    
    }
    
module.exports = MarcaController
