const Sequelize = require('sequelize');

const db = new Sequelize('mydb', 'postgres', 'Xcu2man1328', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Message = db.define('mensajes', {
    path: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    text: Sequelize.STRING
});

module.exports = Message;