import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

// The password is ILoveProgramming
const app = express();
const port = 3000;
const pass = 'ILoveProgramming';
var userIsAuthorised = false;

const __dirname = dirname(fileURLToPath(import.meta.url));

function authorizeUser(req, res, next) {
    // Esta implementacion no me gusta, se ejecuta incluso al obtener el Form.
    const passReceived = req.body.password;
    if (passReceived === pass) {
        userIsAuthorised = true;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended:true }));
app.use(authorizeUser);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/check', (req, res) => {
    if (!userIsAuthorised) {
        res.sendFile(`${__dirname}/public/index.html`);
    } else {
        res.sendFile(`${__dirname}/public/secret.html`);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));