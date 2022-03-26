'use strict'
const Disco = use('App/Models/Disco')
const Database = use('Database')
class DiscoController {
    async index ({ response }) {
      
        const discos = await Database.table('discos as i' ).innerJoin('artistas as m', 'i.idartista', 'm.id')
        .innerJoin('generos as c', 'i.idgenero', 'c.id').select("i.id","i.nombre","i.precio","m.nombre as artista","c.nombre as genero")
        
        return response.json({
          status: true,
          mensaje: "Se obtuvieron los discos",
          data: discos
        })
        
      }
    
      async store ({ request, response, session }) {
    
        const discos = new Disco()
        
        discos.nombre = request.input('nombre'),
        discos.precio = request.input('precio'),
        discos.idartista = request.input('idartista'),
        discos.idgenero = request.input('idgenero')
        await discos.save()
    
        return response.json({
          status: true,
          mensaje: "Se guardo el disco",
          data: discos
        })
      
      }
     //modificar
      async update({params, request, response}) {
        const discos = await Disco.find(params.id)
        discos.nombre = request.input('nombre'),
        discos.precio = request.input('precio'),
        discos.idartista = request.input('idartista'),
        discos.idgenero = request.input('idgenero')
    
        await discos.save()
    
        return response.json({
          status: true,
          mensaje: "Se actualizaron los discos",
          data: discos
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const discos = await Disco.find(params.id)
        await discos.delete()
    
        return response.json({
          status: true,
          mensaje: "Se elimino el disco",
          data: discos
        })
      }
    
    }


module.exports = DiscoController
