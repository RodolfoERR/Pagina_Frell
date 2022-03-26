'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Provedor extends Model {

    marcas () {
        return this.hasMany('App/Models/Marca')
      }
    estados () {
        return this.hasMany('App/Models/Estado')
      }
    
}

module.exports = Provedor
