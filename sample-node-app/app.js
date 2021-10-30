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
        name: 'DevOps is cool',
        technology: 'Docker',
        hostname: hostname
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'What is DevOps',
        name: 'Get to know more',
        technology: 'Node Js',
        hostname: hostname
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});