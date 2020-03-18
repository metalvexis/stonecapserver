export DB_HOST=postgres://jp:18412392@localhost:5432/jp_dev

npx sequelize db:drop

npx sequelize db:create

npx sequelize db:migrate

npx sequelize db:seed:all


