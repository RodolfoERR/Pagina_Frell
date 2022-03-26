'use strict'
const Database = use('Database')
const User = use('App/Models/User')
class UserController {
 async store({request,response}){
    const userData=request.only(['email','password'])
    const user= await User.create(userData)
    const newUser = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.rolid').select("u.id", "u.email","r.rol")
    .where("u.id", user.id)
        return response.created({
         status:true,
         data:newUser     
        })
    }
}

module.exports = UserController
