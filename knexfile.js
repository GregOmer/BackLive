module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/live-lecture-db'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/live-lecture-db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
