const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.listen(8888);

const blogs = [
    {title: 'Mr T. vs Bart Simpson', snippet: 'Mr. T crushes Bart!'},
    {title: 'Mr T. vs Rocky', snippet: 'Rockey gets a lot of pain.'},
    {title: 'Mr T. vs Yo Mama', snippet: 'No.'}
]

app.get('/', (request, response) => {
    response.render('index', {title: 'Home', blogs});
});

app.get('/about', (request, response) => {
    response.render('about', {title: 'About'});
});

app.get('/about-node.js', (request, response) => {
    response.redirect('/about');
});

app.get('/blogs/create', (request, response) => {
    response.render('create', {title: 'New Blog'});
})

app.use((request, response) => {
    response.status(404).render('404', {title: 'Mr. T Says'});
});