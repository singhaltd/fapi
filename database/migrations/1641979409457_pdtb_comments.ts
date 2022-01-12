import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PdtbComments extends BaseSchema {
  protected tableName = 'pdtb_comments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ref_prod')
      table.string('username')
      table.text('message')
      table.integer('rate_star', 1)
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
