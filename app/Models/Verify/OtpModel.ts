import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OtpModel extends BaseModel {
  public static table = 'sctb_auth_vertifies'
  @column({ isPrimary: true, columnName: 'id' })
  public id: number
  @column({ columnName: 'salt' })
  public salt: string
  @column({ columnName: 'hash' })
  public hash: string
  @column({ columnName: 'code' })
  public code: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
