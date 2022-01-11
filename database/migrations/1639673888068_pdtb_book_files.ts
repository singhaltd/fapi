import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PdtbBookFiles extends BaseSchema {
  protected tableName = 'pdtb_book_files'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('bcode').unique().primary().notNullable()
      table.string('file').notNullable()
      table.string('type').notNullable()
      table.float('price', 2).defaultTo(0).notNullable()
      table.string('maker')
      table.string('lang', 2)
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
