# stonecapserver
WIP Thesis Project Management Tool - Backend Service


# Requirements
- NodeJs v8.17.0 [Link](https://nodejs.org/en/)
- PostgreSQL v11.7 [Link](https://www.postgresql.org/)
- .env file in root of project (ask from dev)

## Nice to have
- Postgres Client [Link](https://www.pgadmin.org/)
- Yarn Package Manager v1 [Link](https://classic.yarnpkg.com/lang/en/)


# Installation

1. Install [nodemon](https://nodemon.io/) globally
```
npm install nodemon --global
```

2. Install dependencies
```
npm install
```

3. Start server
```
npm run start
```

# Generate seed data

1. Setup connection to db
```
export DB_HOST=postgres://<user>:<password>@localhost:5432/jp_dev
```

2. Create tables
```
npx db:migrate
```

3. Seed database
```
npx db:seed:undo:all
```

# Endpoints
WIP
