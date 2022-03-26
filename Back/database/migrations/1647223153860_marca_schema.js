'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcaSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments('id')
      table.string('nombre').notNullable().unique()
      table.string('descripcion').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcaSchema
