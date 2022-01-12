import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import PdcommentModel from 'App/Models/PdcommentModel'

export default class ReviewsController {
    public async store({ auth, request, params, response }: HttpContextContract) {
        const body = schema.create({
            message: schema.string(),
            rate: schema.number(),
            // product: schema.string()
        })
        const dt = await request.validate({ schema: body })
        const result = await PdcommentModel.create(Object.assign(dt, { ref_product: params.id, username: 'THONG' }))
        return result
    }

    public async getReview({ auth, request, params, response }: HttpContextContract) {
        try {
            return await PdcommentModel.findBy('ref_prod', params.id)
        } catch (e) {
            console.log(e)
        }
    }
}
