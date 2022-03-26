'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('rolid').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {localStorage
    this.drop('users')
  }
}

module.exports = UserSchema
