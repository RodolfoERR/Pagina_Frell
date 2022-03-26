'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Artista extends Model {
    marcas () {
        return this.hasOne('App/Models/Estados')
      }
}

module.exports = Artista
