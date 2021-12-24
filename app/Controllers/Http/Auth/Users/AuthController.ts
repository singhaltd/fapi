import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import UserModel from 'App/Models/Users/UserModel'
import Hash from '@ioc:Adonis/Core/Hash'
import Encryption from '@ioc:Adonis/Core/Encryption'
var CryptoJS = require("crypto-js");

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
        const payload = schema.create({
            username: schema.string(),
            password: schema.string(),
            location: schema.string(),
            captype: schema.string(),
            captoken: schema.string(),
            islogin: schema.string()
        })
        const dvice = request.headers().toString()
        const data = await request.validate({ schema: payload })
        const rheader = {
            ipaddress: request.ip(),
            device_info: await Hash.make(dvice),
            location: data.location,
            captype: data.captype,
            captoken: data.captoken,
            otp: '123456',
            islogin: data.islogin
        }

        try {
            response.status(200);
            return auth.use('api').attempt(data.username, data.password, rheader)
        } catch (e) {
            console.log(e)
        }
    }
    public async loginQr({ request, auth, response }: HttpContextContract) {
        const dvInfo = request.headers()
        const addres = request.ip()
        const payload = schema.create({
            username: schema.string(),
            password: schema.string()
        })

        const data = await request.validate({ schema: payload })

        try {
            response.status(200);
            return addres
        } catch (e) {
            console.log(e)
        }
    }

    public async getrcap({ request, auth, response }: HttpContextContract) {
        const dvInfo = request.headers()
        const addres = request.ip()
        const payload = JSON.stringify(Object.assign(dvInfo, addres))
        const encrypted = Encryption.encrypt(payload)


        try {
            response.status(200);
            return dvInfo['postman-token']
        } catch (e) {
            console.log(e)
        }
    }
    public async getotp({ request, auth, response }: HttpContextContract) {
        // ip + user + password + device = captoken
        const dvInfo = request.headers()
        const addres = request.ip()
        const payload = JSON.stringify({})
        const user = Encryption.encrypt({ username: 'laithong', password: '123456' })
        var ciphertext = CryptoJS.AES.encrypt('my message', '1234').toString();



        try {
            response.status(200);
            return ciphertext
        } catch (e) {
            console.log(e)
        }
    }

    public async getProfile({ auth, response }) {
        await auth.use('api').authenticate()
        return response.json({ user: auth.use('api').user! })
    }
}
