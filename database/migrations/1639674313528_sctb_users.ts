import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SctbUsersSchema extends BaseSchema {
  protected tableName = 'sctb_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('user_id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('hash')
      table.string('ldap_user')
      table.string('stat', 1).notNullable()
      table.string('pwd_change_dt')
      table.string('maker').notNullable()
      table.string('auth')
      table.string('force_pwd_change')
      table.string('user_stat', 1)
      table.string('email').notNullable()
      table.string('mobile').notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
