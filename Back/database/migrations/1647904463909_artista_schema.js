'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtistaSchema extends Schema {
  up () {
    this.create('artistas', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('edad').notNullable()
      table.text('descripcion').notNullable()
      table.integer('lugarnacimiento').unsigned().references('id').inTable('estados').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('artistas')
  }
}

module.exports = ArtistaSchema
