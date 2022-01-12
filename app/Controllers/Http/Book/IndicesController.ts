import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import BcateModel from 'App/Models/Book/BcateModel'
import BookModel from 'App/Models/Book/BookModel'

export default class IndicesController {

    public async getBook({ request, response }: HttpContextContract) {
        try {
            const dtbook = null
            // if (request.only['q'] === 'all') {
            let dt = await BookModel.query()
                .preload('bcate', (query) => {
                    query.select('catitle')
                })
                .preload('audio', (q) => {
                    q.select('*')
                })
                .preload('ebook', (q) => {
                    q.select('*')
                })
            Object.assign(dt, dtbook)
            //     console.log(dt)
            // }
            return dtbook
        } catch (e) {
            console.log(e)
        }
    }
    public async findBook({ params }: HttpContextContract) {
        try {
            const dtbook = await BookModel.query()
                .preload('bcate', (q) => {
                    q.select('catitle')
                })
                .preload('audio', (q) => {
                    q.select('*')
                })
                .preload('ebook', (q) => {
                    q.select('*')
                })
                .where('id', params.d)

            return dtbook
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



    ///
    public async getCategory() {

        try {
            return await BcateModel.query().where('stat', 'A')
        } catch (e) {
            console.log(e)
        }
    }
    public async CreateCategory({ request, response }: HttpContextContract) {
        const body = schema.create({
            code: schema.string(),
            title: schema.string(),
            description: schema.string(),
        })

        const dta = await request.validate({ schema: body })
        try {
            return await BcateModel.create(dta)
        } catch (e) {
            console.log(e)
        }
    }
}
