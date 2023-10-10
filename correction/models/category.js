const { DataTypes } = require('sequelize');
const sequelize = require('../db/database.js');

const Category = sequelize.define('Category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
}, {
    sequelize,
    modelName: 'category',
    tableName: 'category',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Category;