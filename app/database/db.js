const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');

const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Linking to the models to db

db.User = require('../models/user')(db.connection, DataTypes);
db.Address = require('../models/address')(db.connection, DataTypes);

// Linking models

db.User.associate(db);
db.Address.associate(db.connection.models);

module.exports = db;
