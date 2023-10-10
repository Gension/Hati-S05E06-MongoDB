const express = require('express');
const { Category } = require('../models');

const router = express.Router();

// - `GET /categories`: Récupère tous les categories.
router.get('/', async (req, res) => {
    try {
        res.json((await Category.findAll({
            include: 'todos'
        })));

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `GET /categories/:id`: Récupère un category spécifique par ID.
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ error: 'id is not a number' });
    }

    try {
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'category not found' });
        }

        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `POST /categories`: Crée un nouveau category.
router.post('/', async (req, res) => {
    const body = req.body;

    try { // Le try/catch permet de gérer les erreurs en cas de plantage du code sensible
        // TODO: vérifier que les champs sont bien remplis
        const category = await Category.create(body);

        res.status(201).json(category);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'category not created' });
    }

});
// - `PUT /categories/:id`: Met à jour un category spécifique par ID.
router.put('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ error: 'id is not a number' });
    }
    try {
        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ error: 'category not found' });
        }

        for(let key of Object.keys(body)) {
            category[key] = body[key];
        }

        await category.save();

        res.json(category);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error' });
    }
});

// - `DELETE /categories/:id`: Supprime un category spécifique par ID.
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (isNaN(id)) {
            return res.status(400).json({ error: 'id is not a number' });
        }

        let result = await Category.destroy({
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