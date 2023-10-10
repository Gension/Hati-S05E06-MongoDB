require('dotenv').config();
const express = require('express');
const todoRouter = require('./routes/todo');
const categoryRouter = require('./routes/category');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); 

app.use('/todos', todoRouter);
app.use('/categories', categoryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});