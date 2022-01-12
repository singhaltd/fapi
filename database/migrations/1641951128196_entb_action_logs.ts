import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EntbActionLogs extends BaseSchema {
  protected tableName = 'entb_action_logs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('ref_id').unique().primary().notNullable()
      table.integer('ev_sr_no')
      table.string('event', 6)
      table.string('branch_code')
      table.string('acc')
      table.string('ac_ccy')
      table.string('trn_code', 3)
      table.string('exc_rate', 1)
      table.string('module', 3)
      table.string('product', 5)
      table.string('user_id')
      table.string('fin_cycle', 3)
      table.string('period_code', 5)
      table.date('trn_dt')
      table.string('cust_gl', 2)
      table.float('fcy_amount', 10, 2)
      table.float('lcy_amount', 10, 2)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('make_dtime', { useTz: true })
      table.timestamp('update_dtime', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
