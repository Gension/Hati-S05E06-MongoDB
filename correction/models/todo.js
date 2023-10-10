const { DataTypes } = require('sequelize');
const sequelize = require('../db/database.js');
const Category = require('./category.js');

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
}, {
    sequelize,
    modelName: 'todo',
    tableName: 'todo',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Todo;