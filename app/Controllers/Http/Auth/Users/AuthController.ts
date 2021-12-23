import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import UserModel from 'App/Models/Users/UserModel'


export default class AuthController {
    public async index({ request, response }: HttpContextContract) {

        const data = schema.create({

        })
        response.status(200)
        return 'asdlfaksjfl'
    }

    public async store({ request, auth, response }: HttpContextContract) {

        const payload = schema.create({
            firstname: schema.string(),
            lastname: schema.string()

        })
        const data = await request.validate({ schema: payload })
        response.status(200)
        return data
    }


    public async register({ request, response }: HttpContextContract) {

        const Userbody = schema.create({
            username: schema.string(),
            email: schema.string(),
            mobile: schema.string(),
            password: schema.string()
        })

        const payload = await request.validate({ schema: Userbody })
        const res = await UserModel.create(payload)
        response.status(200)
        return res
    }
    public async login({ request, auth, response }: HttpContextContract) {
        request.header('jss-id') === "hello"
        const payload = schema.create({
            username: schema.string(),
            password: schema.string()
        })

        const data = await request.validate({ schema: payload })

        try {
            response.status(200);
            return auth.use('api').attempt(data.username,data.password)
        } catch (e) {
            console.log(e)
         }
    }
}
