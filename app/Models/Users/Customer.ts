import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import UserModel from 'App/Models/Users/UserModel'

export default class Customer extends BaseModel {
  public static table = 'sctb_customers'
  @column({ isPrimary: true, columnName: 'cs_code' })
  public id: number
  @column({ columnName: 'firstname' })
  public firstname: string
  @column({ columnName: 'lastname' })
  public lastname: string
  @column({ columnName: 'mid_name' })
  public midname: string
  @column({ columnName: 'mobile' })
  public mobile: string
  @column({ columnName: 'email' })
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => UserModel,{
    localKey:'id'
  })
  public User: BelongsTo<typeof UserModel>

  @hasOne(() => UserModel, {
    foreignKey: 'id',
  })
  public user: HasOne<typeof UserModel>
}
