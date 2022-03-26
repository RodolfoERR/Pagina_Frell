'use strict'
const { hooks } = require('@adonisjs/ignitor');

hooks.after.providersBooted(() => {
    const Exception = use('Exception');

    //Aquí si no hay algun usuario autenticado y se trata de entrar a alguna ruta, se redirige al inicio de sesión//
    Exception.handle('InvalidSessionException', (error, {response}) =>{
        return response.redirect('/login');
    })
})