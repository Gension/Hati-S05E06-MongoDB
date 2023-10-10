require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

// On utilise mongoose.connect pour se connecter à la base de données
// cf. https://mongoosejs.com/
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
});

// Charger une fois mon model afin qu'il soit accessible à travers l'application

require('./models/hospital');
require('./models/user');

const userRouter = require('./routes/user');
const hospitalRouter = require('./routes/hospital');

const app = express();

app.use(express.json()); // pour lire les req.body en json

app.use('/users', userRouter);
app.use('/hospitals', hospitalRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});