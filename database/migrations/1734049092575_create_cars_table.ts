import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableAnnouncementName = 'announcements'

  async up() {
    this.schema.createTable(this.tableAnnouncementName, (table) =>{
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(this.now());
      table.timestamp('updated_at');
      table.string('title').notNullable();
      table.text('content').notNullable();
    });

    this.schema.createTable('cars', (table) =>{
      table.increments('id').primary();
      table.timestamp('created_at').defaultTo(this.now());
      table.timestamp('updated_at');
      table.string('brand').notNullable();
      table.string('model').notNullable();
      table.string('fuelType').notNullable();
      table.integer('door');
      table.string('gearbox').notNullable();
      table.integer('kilometers').notNullable();
      table.integer('price').notNullable();
      table.integer('year').notNullable();
      table
        .integer('announcementId')
        .unsigned()
        .references('id')
        .inTable(this.tableAnnouncementName)
        .onDelete('CASCADE')
    });
  }

  async down() {
    this.schema.dropTableIfExists(this.tableAnnouncementName)
  }
}
