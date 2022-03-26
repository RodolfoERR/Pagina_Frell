'use strict'
const Provedor = use('App/Models/Provedor')
class ProvedorController {
    async index ({ response }) {
      
        const provedores = await Provedor.all()
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los provedores",
          data: provedores
        })
        
      }
    
      async store ({ request, response, session }) {
    
        const provedores = new Provedor()
        
        provedores.nombre = request.input('nombre'),
        provedores.apellido = request.input('apellido'),
        provedores.correo = request.input('correo'),
        provedores.telefono = request.input('telefono'),
        provedores.marca = request.input('marca'),
        provedores.lugar = request.input('lugar')
        await provedores.save()
    
        return response.json({
          status: true,
          mensaje: "Se guardo el provedor",
          data: provedores
        })
      
      }
     //modificar
      async update({params, request, response}) {
        const provedores = await Provedor.find(params.id)
        provedores.nombre = request.input('nombre'),
        provedores.apellido = request.input('apellido'),
        provedores.correo = request.input('correo'),
        provedores.telefono = request.input('telefono'),
        provedores.marca = request.input('marca'),
        provedores.lugar = request.input('lugar')
    
        await provedores.save()
    
        return response.json({
          status: true,
          mensaje: "Se actualizo el provedor ",
          data: provedores
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const provedores = await Provedor.find(params.id)
        await provedores.delete()
    
        return response.json({
          status: true,
          mensaje: "Se elimino el provedor",
          data: provedores
        })
      }
    
    }
module.exports = ProvedorController
