import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import UserModel from 'App/Models/Users/UserModel'
import Hash from '@ioc:Adonis/Core/Hash'
import Encryption from '@ioc:Adonis/Core/Encryption'
import OtpModel from 'App/Models/Verify/OtpModel'
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
            const u = await UserModel.query()
                .select('hash', 'twof')
                .where('hash', data.captoken)
                .firstOrFail()

            response.status(200);
            if (u && !u.twof) {
                return auth.use('api').attempt(data.username, data.password, rheader)
            } else {
                return auth.use('api').attempt(data.username, data.password, rheader)
            }
        } catch (e) {
            console.log(e)
            response.status(401)
            return 'login faild'
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
        // user + password + device > ip = captoken
        const totp = Math.floor(100000 + Math.random() * 900000)
        const parsedkey = CryptoJS.enc.Utf8.parse('1222');
        const iv = CryptoJS.enc.Utf8.parse('1222');
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify({ username: 'laithong', password: '123456', uuid: '12345678910', code: totp }), parsedkey, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

        /// decrypt
        var keys = CryptoJS.enc.Utf8.parse('1222');
        let base64 = CryptoJS.enc.Base64.parse(encrypted.toString());
        let src = CryptoJS.enc.Base64.stringify(base64);
        var decrypt = CryptoJS.AES.decrypt(src, keys, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        const cjs = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8))



        try {
            // var bytes = CryptoJS.AES.decrypt(verify, 'secret key 123');
            // var originalText = bytes.toString(CryptoJS.enc.Utf8);
            // const addres = request.ip()
            await UserModel.query()
                .where('username', cjs.username)
                .update({ hash: encrypted.toString() })
            await OtpModel.create({
                salt: '1111111',
                hash: encrypted.toString(),
                code: totp

            })
            response.status(200);
            // return await OtpModel.create({
            //     salt: encrypted.toString(),
            //     hash: '12222',
            //     code: totp
            // })
            return encrypted.toString()
        } catch (e) {
            console.log(e)
        }
    }

    public async getProfile({ auth, response }) {
        await auth.use('api').authenticate()
        return response.json({ user: auth.use('api').user! })
    }
}
