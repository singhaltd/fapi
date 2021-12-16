import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SctbCustomers extends BaseSchema {
  protected tableName = 'sctb_customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cs_code')
      table.string('firstname')
      table.string('lastname')
      table.string('mid_name')
      table.string('mobile')
      table.string('email')
      table.string('country',2)
      table.string('address')
      table.string('address1')
      table.string('nationality')
      table.string('frozen',1)
      table.string('cust_cate',5)
      table.string('stat',1)
      table.string('maker')
      table.string('staff',1)
      table.string('auth')

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
