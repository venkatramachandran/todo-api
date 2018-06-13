const db = require('./db');

const getAllTodos = () => {
    return db.Todo.findAll();
};

const getTodo = (id) => {
    return db.Todo.findById(id);
};

const createTodo = async (todo) => {
    const instance = await db.Todo.create(todo);
    return instance;
};

const deleteTodo = async (id) => {
    const instance = await db.Todo.findById(id);
    await instance.destroy();
    return;
};

const markTodoComplete = async (id, complete) => {
    let instance = await db.Todo.findById(id);
    instance = await instance.update({
        complete
    });
    return instance;
};

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    deleteTodo,
    markTodoComplete
};
