import express from 'express';

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    var userAgent = req.headers['user-agent'];
    res.status(200);
    res.send('<h1>Hello, you are using ' + userAgent + '</h1>');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.send('<h1>About Page</h1><p>This is the about page of our simple Express server.</p>');
});

app.get('/contact', (req, res) => {
    res.status(200);
    res.send('<h1>Contact Page</h1><p>You can contact us at...</p>');
});

app.post('/submit', (req, res) => {
    res.sendStatus(200);
});