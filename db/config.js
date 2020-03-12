module.exports = {
  development: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
  test: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
  production: {
    use_env_variable: 'DB_HOST',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  }
}
