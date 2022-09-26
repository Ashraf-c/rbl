module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '192.168.10.122'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'rbl'),
      user: env('DATABASE_USERNAME', 'root1'),
      password: env('DATABASE_PASSWORD', 'admin1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
