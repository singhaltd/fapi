import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import BookModel from './BookModel';

export default class BaudioModel extends BaseModel {
  public static table = "pdtb_book_audios";
  @column({ isPrimary: true, columnName: 'bcode' })
  public bookcode: string
  @column({ columnName: 'file' })
  public file: string
  @column({ columnName: 'author' })
  public author: string
  @column({ columnName: 'type' })
  public type: string
  @column({ columnName: 'price' })
  public price: number
  @column({ columnName: 'maker' })
  public maker: string
  @column({ columnName: 'lang' })
  public lang: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => BookModel, {
    localKey: 'id'
  })
  public Bkmod: BelongsTo<typeof BookModel>
}
