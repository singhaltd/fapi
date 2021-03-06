import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SctbAuthVertifies extends BaseSchema {
  protected tableName = 'sctb_auth_vertifies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('salt').notNullable()
      table.string('hash').notNullable()
      table.string('code', 6).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
