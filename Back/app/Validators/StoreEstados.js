'use strict'
const {formatters}=use('Validator')
class StoreEstados {
  get rules () {
    return {
      nombre:'required|max:30',
      entidad:'required|max:29',
      descripcion:'required|min:3'
    }
  }
  get validateAll(){
    return true
  }
  get formatter(){
    return formatters.JsonApi;
  }
}

module.exports = StoreEstados
