'use strict';

const Admin = require('./AdminSeeder')
const Rol = require('./RoleSeeder')

class DatabaseSeeder {
  async run() {
    // Put yours seeders in the desired order
    await Rol.run()
    await Admin.run()
  }
}

module.exports = DatabaseSeeder