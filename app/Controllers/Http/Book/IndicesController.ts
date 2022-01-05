import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookModel from 'App/Models/Book/BookModel'

export default class IndicesController {

    public async getBook({ params }: HttpContextContract) {
        try {
            return await BookModel.findBy('id', params.d)
        } catch (e) {
            console.log(e)
        }
    }

    public async getTop({ request, response }: HttpContextContract) {
        try {

        } catch (e) {
            console.log(e)
        }
    }


    public async getReview({ params }: HttpContextContract) {
    }
}
