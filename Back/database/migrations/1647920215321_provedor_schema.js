'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvedorSchema extends Schema {
  up () {
    this.create('provedors', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.string('apellido').notNullable()
      table.string('correo').notNullable()
      table.string('telefono').notNullable()
      table.integer('marca').unsigned().references('id').inTable('marcas').onDelete('CASCADE')
      table.integer('lugar').unsigned().references('id').inTable('estados').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('provedors')
  }
}

module.exports = ProvedorSchema
