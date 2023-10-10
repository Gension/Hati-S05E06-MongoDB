const Category = require('./category');
const Todo = require('./todo');

Category.hasMany(Todo, {
    foreignKey: 'categoryId',
    as: 'todos'
});
Todo.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category'
});

const doSync = async () => {
    await Category.sync();
    await Todo.sync();
}

doSync();

module.exports = { Category, Todo }