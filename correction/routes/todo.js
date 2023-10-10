const express = require('express');
const { Todo } = require('../models');

const router = express.Router();

// - `GET /todos`: Récupère tous les todos.
router.get('/', async (req, res) => {
    try {
        res.json((await Todo.findAll({
            include: 'category'
        })));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `GET /todos/:id`: Récupère un todo spécifique par ID.
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ error: 'id is not a number' });
    }

    try {
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'todo not found' });
        }

        res.json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `POST /todos`: Crée un nouveau todo.
router.post('/', async (req, res) => {
    const body = req.body;

    try { // Le try/catch permet de gérer les erreurs en cas de plantage du code sensible
        // TODO: vérifier que les champs sont bien remplis
        const todo = await Todo.create(body);

        res.status(201).json(todo);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'todo not created' });
    }

});
// - `PUT /todos/:id`: Met à jour un todo spécifique par ID.
router.put('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ error: 'id is not a number' });
    }
    try {
        const todo = await Todo.findByPk(id);

        if (!todo) {
            return res.status(404).json({ error: 'todo not found' });
        }

        for(let key of Object.keys(body)) {
            todo[key] = body[key];
        }

        await todo.save();

        res.json(todo);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `DELETE /todos/:id`: Supprime un todo spécifique par ID.
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(id)) {
            return res.status(400).json({ error: 'id is not a number' });
        }

        let result = await Todo.destroy({
            where: {
                id
            }
        });

        res.json({
            message: `${result} items deleted`
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

module.exports = router;