'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscoSchema extends Schema {
  up () {
    this.create('discos', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('precio')
      table.integer('idartista').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
      table.integer('idgenero').unsigned().references('id').inTable('generos').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('discos')
  }
}

module.exports = DiscoSchema
