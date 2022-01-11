import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import BookModel from './BookModel';

export default class BcateModel extends BaseModel {
  public static table = 'pdtb_book_cates';

  @column({ isPrimary: true, columnName: 'cat_code' })
  public code: string
  @column({ columnName: 'title' })
  public catitle: string
  @column({ columnName: 'stat' })
  public stat: string
  @column({ columnName: 'maker' })
  public maker: string
  @column({ columnName: 'descr' })
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => BookModel, {
    localKey: 'cate'
  })
  public Bkmod: BelongsTo<typeof BookModel>

  @beforeCreate()
  public static async CateNew(cat: BcateModel) {
    cat.stat = 'A'
    cat.maker = 'THONG'
  }
}
