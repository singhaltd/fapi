import Route from '@ioc:Adonis/Core/Route'

// role user
Route.resource('authUser', 'Auth/Users/AuthController').apiOnly();

//Client Register
Route.post('register', 'Auth/Users/AuthController.register')
//Client Login
Route.post('login/ato', 'Auth/Users/AuthController.login')
Route.post('login/qr', 'Auth/Users/AuthController.loginQr')
Route.get('verify/getrcap', 'Auth/Users/AuthController.getrcap')
Route.get('verify/getotp', 'Auth/Users/AuthController.getotp')
Route.post('/logout', async ({ auth, response }) => {
    await auth.use('api').revoke()
    return {
        logout: true
    }
})