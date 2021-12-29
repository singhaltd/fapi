import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class UserModel extends BaseModel {
  public static table = 'sctb_users'
  @column({ isPrimary: true, columnName: 'user_id' })
  public id: string
  @column({ columnName: 'username' })
  public username: string
  @column({ columnName: 'password' })
  public password: string
  @column({ columnName: 'twof' })
  public twof: boolean
  @column({ columnName: 'hash' })
  public hash: string
  @column({ columnName: 'ldap_user' })
  public ldap_user: string
  @column({ columnName: 'stat' })
  public stat: string
  @column({ columnName: 'pwd_change_dt' })
  public pwd_change_dt: Date
  @column({ columnName: 'maker' })
  public maker: string
  @column({ columnName: 'auth' })
  public auth: string
  @column({ columnName: 'force_pwd_change' })
  public force_pwd_change: string
  @column({ columnName: 'email' })
  public email: string
  @column({ columnName: 'user_stat' })
  public user_stat: string
  @column({ columnName: 'mobile' })
  public mobile: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



  @beforeSave()
  public static async userAuth(user: UserModel) {
    user.id = user.username
    user.stat = 'P'
    user.twof = true
    user.maker = 'SYSTEM'
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
