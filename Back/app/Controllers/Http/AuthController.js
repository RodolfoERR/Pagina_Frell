'use strict'
const Database = use('Database')

class AuthController {
    async login({request,response,auth}){
        const {email,password} = request.only(['email','password'])
        const user = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.rolid').select("u.id", "u.email","r.rol").
        where("u.email", email).first()
        const token = await auth.attempt(email,password)
        return response.json({
          access_token: token,
          user: user
        })  
      }
      
}

module.exports = AuthController
