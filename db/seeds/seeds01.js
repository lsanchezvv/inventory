'use strict'

exports.seed = async (knex) => {
  await knex('item_brand').del()
  await knex('item_brand').insert([{ name: 'Samsung' }, { name: 'Apple' }, { name: 'LG' }])
  await knex('item_type').del()
  await knex('item_type').insert([{ name: 'TV' }, { name: 'Laptop' }, { name: 'Phone' }])
  await knex('location').del()
  await knex('location').insert([{ name: '1st Floor', description: 'Test', child_location_id: null }])
  await knex('status').del()
  await knex('status').insert([{ name: 'in use' }])
  await knex('department').del()
  await knex('department').insert([{ name: 'Engineers' }])
  await knex('end_user').del()
  await knex('end_user').insert([{ first_name: 'Luis', last_name: 'Sanz', full_name: 'Luis Sanchez', department_id: 1 }])
  await knex('item').del()
  await knex('item').insert([{ type_id: 1, brand_id: 1, model_no: 'test', serial_no: '001', tag: 'test' }])
  await knex('inventory').del()
  await knex('inventory').insert([{
    item_id: 1, status_id: 1, location_id: 1, end_user_id: 1, comments: 'First inventory record'
  }])

}
