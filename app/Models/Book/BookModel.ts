import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import BcateModel from './BcateModel'
import BaudioModel from './BaudioModel'
import BepubModel from './BepubModel'
export default class BookModel extends BaseModel {
  public static table = "pdtb_books"
  @column({ isPrimary: true, columnName: 'ref_id' })
  public id: string
  @column({ columnName: 'title' })
  public title: string
  @column({ columnName: 'description' })
  public descr: string
  @column({ columnName: 'fimage' })
  public image: string
  @column({ columnName: 'language' })
  public lan: string
  @column({ columnName: 'local' })
  public local: string
  @column({ columnName: 'isbn' })
  public isbn: string
  @column({ columnName: 'cate' })
  public cate: string
  @column({ columnName: 'price' })
  public price: number
  @column({ columnName: 'tag' })
  public tag: string
  @column({ columnName: 'inst_qty' })
  public qty: number
  @column({ columnName: 'ccy' })
  public ccy: string
  @column({ columnName: 'user_id' })
  public maker: string
  @column({ columnName: 'author' })
  public author: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => BcateModel, {
    foreignKey: 'code',
    localKey: 'cate'
  })
  public bcate: HasOne<typeof BcateModel>


  @hasOne(() => BaudioModel, {
    foreignKey: 'bookcode',
    localKey: 'id'
  })
  public audio: HasOne<typeof BaudioModel>


  @hasOne(() => BepubModel, {
    foreignKey: 'bookcode',
    localKey: 'id'
  })
  public ebook: HasOne<typeof BepubModel>

}
