const express = require('express');
const app = express();
const os = require('os');
const hostname = os.hostname();

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('This is my first AWS Node App.');
// });

// app.get('/about', (req, res) => {
//     res.send({
//         name: 'Simple Node App',
//         technology: 'Node Js'
//     });
// });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home Page',
        description: 'DevOps is cool',
        hostname: hostname
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Page',
        description: 'DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes.',
        hostname: hostname
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});