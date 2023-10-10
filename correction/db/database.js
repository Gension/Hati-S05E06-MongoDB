// je commence par importer Sequelize 

const { Sequelize } = require('sequelize'); // comme c'est indiqué dans la doc

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    logging: false
});

//Je n'oublie pas d'exporter sequelize comme module

module.exports = sequelize;