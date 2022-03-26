'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Instrumento extends Model {
    marcas () {
        return this.hasMany('App/Models/Marca')
      }
    categorias () {
        return this.hasMany('App/Models/Categoria')
      }
}

module.exports = Instrumento
