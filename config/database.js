require('dotenv').config()
module.exports = {
    username: process.env.DB_USERNAME || 'sequelize_user',
    password: process.env.DB_PASSWORD || 'sequelize',
    database: process.env.DB_DATABASE || 'sequelize',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    define: {
        timestamps: false
    }
}