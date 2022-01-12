import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import BookModel from 'App/Models/Book/BookModel'
import { v4 as uuidv4 } from 'uuid';
export default class BscsController {
    public async store({ auth, request, response }: HttpContextContract) {
        let refid = uuidv4().toUpperCase()
        const umaker = await auth.check()
        const body = schema.create({
            title: schema.string(),
            descr: schema.string(),
            lan: schema.string(),
            local: schema.string(),
            isbn: schema.string(),
            cate: schema.string(),
            qty: schema.number(),
            price: schema.number(),
            author: schema.string(),
            ccy: schema.string(),
            image: schema.string()
        })
        const dt = await request.validate({ schema: body })
        try {
            response.status(200)
            return await BookModel.create(Object.assign(dt, { id: refid}))
        } catch (e) {
            console.log(e)
        }
    }
}
