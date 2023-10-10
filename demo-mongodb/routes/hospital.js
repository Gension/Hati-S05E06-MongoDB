const express = require('express');
const mongoose = require('mongoose');

const HospitalModel = mongoose.model('Hospital');
const router = express.Router();

// - `GET /`: Récupère tous les éléments.
router.get('/', async (req, res) => {
    try {
        res.json(await HospitalModel.find({}));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// - `GET /:id`: Récupère un élément spécifique par ID.
router.get('/:id', async (req, res) => {

    const { id } = req.params;

    try {
        const hospital = await HospitalModel.findById(id);

        if (!hospital) {
            return res.status(404).json({ message: 'hospital not found' });
        }

        res.json(hospital);
    } catch (error) {
    }
});

// - `POST /`: Crée un nouveau élément.
router.post('/', async (req, res) => {
    const body = req.body;

    try {
        // TODO Verifier l'intégré des données
        const hospital = await HospitalModel.create(body);

        res.json(hospital);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'hospital not created' });
    }
});

// - `PUT /:id`: Met à jour un élémént spécifique par ID.
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const hospital = await HospitalModel.findByIdAndUpdate(id, req.body);

        if(!hospital) {
            return res.status(404).json({ error: 'hospital not found' });
        }
        res.json(hospital);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'hospital not updated' });
    }
});

// - `DELETE /:id`: Supprime un élément spécifique par ID.
router.delete('/:id', async (req, res) => {
    
    const { id } = req.params;

    try {
        const hospital = await HospitalModel.findByIdAndDelete(id);

        if(!hospital) {
            return res.status(404).json({ error: 'hospital not found' });
        }
        res.json({
            "message": "deleted"
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: 'hospital not deleted' });
    }
});

module.exports = router;