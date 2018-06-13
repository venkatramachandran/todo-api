const todoHandler = require('./todo');

const init = (server) => {
    server.get('/todos', async (req, res, next) => {
        res.json(await todoHandler.getAllTodos());
        next();
    });
    server.get('/todos/:id', async (req, res, next) => {
        res.json(await todoHandler.getTodo(req.params.id));
        next();
    });
    server.post('/todos',async (req, res, next) => {
        const todo = req.body;
        const instance = await todoHandler.createTodo(todo);
        res.json(instance);
        next();
    });
    
    server.del('/todos/:id', async (req, res, next) => {
        await todoHandler.deleteTodo(req.params.id);
        res.json(204, {});
        next();
    });
    
    server.put('/todos/:id/complete', async (req, res, next) => {
        const instance = await todoHandler.markTodoComplete(req.params.id, true);
        res.json(instance);
        next();
    });
    server.put('/todos/:id/incomplete', async (req, res, next) => {
        const instance = await todoHandler.markTodoComplete(req.params.id, false);
        res.json(instance);
        next();
    });
};

module.exports = init;