// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'localhost_inventory'
    },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'localhost_inventory',
      user: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'prod_inventory',
      user: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
