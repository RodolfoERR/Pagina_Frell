'use strict'
const Estado = use('App/Models/Estado')
const { validate } = use('Validator')
class EstadoController {
  async index ({ response }) {
      
    const estados = await Estado.all()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron los estados",
      data: estados
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
    const estados = new Estado()
    
    estados.nombre = request.input('nombre'),
    estados.gobernador = request.input('gobernador'),
    estados.entidad = request.input('entidad'),
    estados.descripcion = request.input('descripcion')
    await estados.save()

    return response.json({
      status: true,
      mensaje: "Se guardo el estado",
      data: estados
    })
  
    // Guaradar mensaje de éxito
    // session.flash({ notification: '¡Marca agregada con éxito!' })
  
    // return response.redirect('back')
  }
 //modificar
  async update({params, request, response}) {
  const estados = await Estado.find(params.id)
   estados.nombre = request.input('nombre'),
   estados.gobernador = request.input('gobernador'),
   estados.entidad = request.input('entidad'),
   estados.descripcion = request.input('descripcion')

    await estados.save()

    return response.json({
      status: true,
      mensaje: "Se actualizo el estado",
      data: estados
    })
  }
//borrar marca
  async destroy ({ params, response }) {
    const estados = await Estado.find(params.id)
    // estados.nombre = request.input('nombre'),
    // estados.gobernador = request.input('gobernador'),
    // estados.entidad = request.input('entidad'),
    // estados.descripcion = request.input('descripcion')
    await estados.delete()

    return response.json({
      status: true,
      mensaje: "Se elimino el estado",
      data: estados
    })
    // Guaradar mensaje de éxito
    // session.flash({ notification: '¡Marca eliminada con éxito!' })
    // return response.redirect('back')
  }

}

module.exports = EstadoController
