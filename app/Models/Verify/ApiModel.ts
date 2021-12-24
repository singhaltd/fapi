import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ApiModel extends BaseModel {
  public static table = "api_tokens"
  @column({ isPrimary: true, columnName: 'id' })
  public id: number
  @column({ columnName: 'user_id' })
  public username: string
  @column({ columnName: 'token' })
  public token: string
  @column({ columnName: 'ipaddress' })
  public ipaddress: string
  @column({ columnName: 'device_info' })
  public devices: string
  @column({ columnName: 'captoken' })
  public captoken: string
  @column({ columnName: 'islogin' })
  public islogin: string
  @column({ columnName: 'otp' })
  public otp: string
  @column({ columnName: 'expires_at' })
  public expired: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
