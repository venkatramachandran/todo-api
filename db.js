const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Todo = sequelize.define('todo', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    todo: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
});

const createModels = async () => {
    await Todo.sync();
};

createModels();

module.exports = {
    Todo
};
