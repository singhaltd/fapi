import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PdtbBookFiles extends BaseSchema {
  protected tableName = 'pdtb_book_files'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('ref_id')
      table.string('fimage')
      table.string('language', 2)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
