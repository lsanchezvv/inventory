exports.up = (knex, Promise) => knex.schema
  .createTable('item_brand', (table) => {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable()
  })
  .createTable('item_type', (table) => {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable()
  })
  .createTable('location', (table) => {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable()
    table.text('description').notNullable()
    table.bigInteger('child_location_id')
  })
  .createTable('status', (table) => {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable()
  })
  .createTable('end_user', (table) => {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable()
  })
  .createTable('item', (table) => {
    table.bigIncrements('id').primary()
    table.bigInteger('type_id').notNullable()
    table.bigInteger('brand_id').notNullable()
    table.string('model_no', 255)
    table.string('serial_no', 255)
    table.string('tag', 255)

    table.foreign('brand_id').references('id').on('item_brand')
    table.foreign('type_id').references('id').on('item_type')
  })
  .createTable('inventory', (table) => {
    table.bigIncrements('id').primary()
    table.bigInteger('item_id').notNullable()
    table.bigInteger('status_id').notNullable()
    table.bigInteger('location_id').notNullable()
    table.bigInteger('end_user_id').notNullable()
    table.text('comments')
    table.timestamps(true, true)

    table.foreign('item_id').references('id').on('item')
    table.foreign('location_id').references('id').on('location')
    table.foreign('status_id').references('id').on('status')
    table.foreign('end_user_id').references('id').on('end_user')
  })



exports.down = (knex, Promise) => knex.schema
  .dropTableIfExists('item_brand')
  .dropTableIfExists('item_type')
  .dropTableIfExists('location')
  .dropTableIfExists('status')
  .dropTableIfExists('end_user')
  .dropTableIfExists('item')
  .dropTableIfExists('inventory')
