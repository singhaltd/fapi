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
      table.string('cate', 5)
      table.string('user_id')
      table.string('author')
      table.string('approver')
      table.float('price', 10, 2).defaultTo(0)
      table.boolean('instrock').defaultTo(0)
      table.integer('inst_qty', 7).defaultTo(0)
      table.integer('div_inst').defaultTo(0)
      table.string('stat_bk', 1)
      table.string('stat_ad', 1)
      table.string('stat_ep', 1)
      table.string('ccy',3)

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
