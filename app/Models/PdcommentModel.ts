import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PdcommentModel extends BaseModel {
  public static table = "pdtb_comments"
  @column({ isPrimary: true,columnName:'id' })
  public id: number
  @column({ columnName: 'message' })
  public message: string
  @column({ columnName: 'username' })
  public username: string
  @column({ columnName: 'ref_prod' })
  public ref_product: string
  @column({ columnName: 'rate_star' })
  public rate: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
