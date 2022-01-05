import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PdtbBookCates extends BaseSchema {
  protected tableName = 'pdtb_book_cates'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cat_code', 5).primary().unique()
      table.string('title').notNullable()
      table.string('descr')
      table.string('stat', 1).notNullable()
      table.string('maker').notNullable()
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
