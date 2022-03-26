'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InstrumentoSchema extends Schema {
  up () {
    this.create('instrumentos', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('precio').notNullable()
      table.integer('cantidad')
      table.integer('idmarca').unsigned().references('id').inTable('marcas').onDelete('CASCADE')
      table.integer('idcategoria').unsigned().references('id').inTable('categorias').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('instrumentos')
  }
}

module.exports = InstrumentoSchema
