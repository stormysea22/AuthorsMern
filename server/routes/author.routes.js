const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.index);
    app.post('/api/authors', AuthorController.create);
    app.get('/api/authors/:id', AuthorController.show);
    app.put('/api/authors/:id', AuthorController.update);
    app.delete('/api/authors/:id', AuthorController.destroy);
};