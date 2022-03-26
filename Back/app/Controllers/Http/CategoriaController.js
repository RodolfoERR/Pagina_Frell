'use strict'
const Categoria = use('App/Models/Categoria')
const { validate } = use('Validator')
class CategoriaController {
  async index ({ response }) {
      
    const categorias = await Categoria.all()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las categorias",
      data: categorias
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
    const categorias = new Categoria()
    
    categorias.nombre = request.input('nombre'),
    categorias.descripcion = request.input('descripcion')
    await categorias.save()

    return response.json({
      status: true,
      mensaje: "Se guardaron las categorias",
      data: categorias
    })
  
    // Guaradar mensaje de éxito
    // session.flash({ notification: '¡Marca agregada con éxito!' })
  
    // return response.redirect('back')
  }
 //modificar
  async update({params, request, response}) {
    const categorias= await Categoria.find(params.id)
   categorias.nombre = request.input('nombre'),
   categorias.descripcion = request.input('descripcion')

    await categorias.save()

    return response.json({
      status: true,
      mensaje: "Se actualizo la categoria",
      data: categorias
    })
  }
//borrar marca
  async destroy ({ params, response }) {
    const categorias = await Categoria.find(params.id)
    // categorias.nombre = request.input('nombre'),
    // categorias.descripcion = request.input('descripcion')
    await categorias.delete()

    return response.json({
      status: true,
      mensaje: "Se elimino la categoria",
      data: categorias
    })
    // Guaradar mensaje de éxito
    // session.flash({ notification: '¡Marca eliminada con éxito!' })
    // return response.redirect('back')
  }

}

module.exports = CategoriaController
