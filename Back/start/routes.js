'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Para registrarse//
Route.resource('/users','UserController').apiOnly().validator(new Map([[['users.store'],['StoreUser']]]))
//Para iniciar sesión//
Route.post('/login', 'AuthController.login')

Route.group(() => {

    Route.resource('marcas', 'MarcaController').apiOnly()
    Route.resource('estados', 'EstadoController').apiOnly()
    Route.resource('categorias', 'CategoriaController').apiOnly()
    Route.resource('generos', 'GeneroController').apiOnly()
    Route.resource('instrumentos', 'InstrumentoController').apiOnly()
    Route.resource('artistas','ArtistaController').apiOnly()
    Route.resource('comentarios','ComentarioController').apiOnly()
    Route.resource('discos','DiscoController').apiOnly()
    Route.resource('provedores','ProvedorController').apiOnly()
    Route.resource('home2', '').apiOnly()
    Route.resource('home', '').apiOnly()
 
}).middleware(['authenticated']);










