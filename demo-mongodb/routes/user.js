const express = require('express');
const mongoose = require('mongoose');

const UserModel = mongoose.model('User');
const router = express.Router();

// - `GET /`: Récupère tous les éléments.
router.get('/', async (req, res) => {
    try {
        res.json(await UserModel.find({}).populate('hospital'));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// - `GET /:id`: Récupère un élément spécifique par ID.
router.get('/:id', async (req, res) => {

    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }

        res.json(user);
    } catch (error) {
    }
});

// - `POST /`: Crée un nouveau élément.
router.post('/', async (req, res) => {
    const body = req.body;

    try {
        // TODO Verifier l'intégré des données
        const user = await UserModel.create(body);

        res.json(user);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'user not created' });
    }
});

// - `PUT /:id`: Met à jour un élémént spécifique par ID.
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findByIdAndUpdate(id, req.body);

        if(!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.json(user);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'user not updated' });
    }
});

// - `DELETE /:id`: Supprime un élément spécifique par ID.
router.delete('/:id', async (req, res) => {
    
    const { id } = req.params;

    try {
        const user = await UserModel.findByIdAndDelete(id);

        if(!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.json({
            "message": "deleted"
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: 'user not deleted' });
    }
});

module.exports = router;