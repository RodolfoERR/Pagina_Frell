'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentarioSchema extends Schema {
  up () {
    this.create('comentarios', (table) => {
      table.increments('id')
      table.text('descripcion').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comentarios')
  }
}

module.exports = ComentarioSchema
