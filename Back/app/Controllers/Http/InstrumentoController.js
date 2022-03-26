'use strict'
const Instrumento = use('App/Models/Instrumento')
const Database = use('Database')
class InstrumentoController {
    async index ({ response }) {
      
        const instrumentos = await Database.table('instrumentos as i' ).innerJoin('marcas as m', 'i.idmarca', 'm.id')
        .innerJoin('categorias as c', 'i.idcategoria', 'c.id').select("i.id","i.nombre","i.cantidad","i.precio","m.nombre as marca","c.nombre as categoria")
        
        return response.json({
          status: true,
          mensaje: "Se obtuvo la lista de Instrumentos",
          data: instrumentos
        })
      }
    
      async store ({ request, response, session }) {
       
        const instrumentos = new Instrumento()
        
        instrumentos.nombre = request.input('nombre'),
        instrumentos.precio = request.input('precio')
        instrumentos.cantidad = request.input('cantidad'),
        instrumentos.idmarca = request.input('idmarca')
        instrumentos.idcategoria =request.input('idcategoria')
        await instrumentos.save()
    
        return response.json({
          status: true,
          mensaje: "Se guardo el instrumento",
          data: instrumentos
        })
      
      }
     //modificar
      async update({params, request, response}) {
        const instrumentos = await Instrumento.find(params.id)
              
        instrumentos.nombre = request.input('nombre'),
        instrumentos.precio = request.input('precio')
        instrumentos.cantidad = request.input('cantidad'),
        instrumentos.idmarca = request.input('idmarca')
        instrumentos.idcategoria =request.input('idcategoria')
        await instrumentos.save()
      
    
        return response.json({
          status: true,
          mensaje: "Se actualizo el el instrumento",
          data: instrumentos
        })
      }
    //borrar marca
      async destroy ({ params, response }) {
        const instrumentos = await Instrumento.find(params.id)
        // instrumentos.nombre = request.input('nombre'),
        // instrumentos.precio = request.input('precio')
        // instrumentos.cantidad = request.input('cantidad'),
        // instrumentos.idmarca = request.input('idmarca')
        // instrumentos.idcategoria =request.input('idcategoria')
        await instrumentos.delete()
    
        return response.json({
          status: true,
          mensaje: "Se elimino el instrumento",
          data: instrumentos
        })

      }
    
    }


module.exports = InstrumentoController
