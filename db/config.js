module.exports = {
  development: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres'
  }
}
