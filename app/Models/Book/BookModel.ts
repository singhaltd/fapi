import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
