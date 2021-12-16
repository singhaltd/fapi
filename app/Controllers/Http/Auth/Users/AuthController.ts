import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'


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


    }
    public async login({ request, response }: HttpContextContract) {
        request.header('jss-id') === "hello"
        const payload = schema.create({
            username: schema.string(),
            password: schema.string()
        })

        const data = await request.validate({ schema: payload })

        try {
            response.status(200);
            return data
        } catch (e) { }
    }
}
