import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PdtbBooks extends BaseSchema {
  protected tableName = 'pdtb_books'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('ref_id').primary().notNullable().unique()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.string('fimage').notNullable()
      table.string('language', 2).notNullable()
      table.string('local', 2).notNullable()
      table.string('isbn')
      table.string('cate',5).unsigned().references('cat_code').inTable('pdtb_book_cates')

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
