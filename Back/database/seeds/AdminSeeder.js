'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

class AdminSeeder {
  static async run () {
    const encryptedPassword = await Hash.make('12345')
    await Database.table('users').insert([
      
      {
        id: 1,
        email: 'admin@gmail.com',
        password: encryptedPassword,
        rolid: 1
      },
      {
        id: 2,
        email: 'guzman@gmail.com',
        password: encryptedPassword,
        rolid: 2
      },
      {
        id: 3,
        email: 'rudy@gmail.com',
        password: encryptedPassword,
        rolid: 1
      }
    ])
  }
}

module.exports = AdminSeeder


