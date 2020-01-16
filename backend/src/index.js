const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://takao:omnistack@cluster0-h5typ.mongodb.net/waze-dev?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

app.use(express.json());

app.use(routes);

app.listen(3333);