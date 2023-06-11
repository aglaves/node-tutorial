const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.set('view engine', 'ejs');

const dbConnection = 'mongodb://mongoadmin:secret@mongo:27017/nodejs?authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to Mongodb');
    app.listen(8888);
}).catch(err => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.redirect('/blogs');
});

app.get('/about', (request, response) => {
    response.render('about', {title: 'About'});
});

app.get('/about-node.js', (request, response) => {
    response.redirect('/about');
});

app.use('/blogs', blogRoutes);

app.use((request, response) => {
    response.status(404).render('404', {title: 'Mr. T Says'});
});