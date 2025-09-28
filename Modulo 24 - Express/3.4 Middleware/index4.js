import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// MiddleWare declaration order is REALLY IMPORTANT
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post('/submit', (req, res) => {
  res.send(`<h1>Th suggested band name is: ${req.body.street}-${req.body.pet}!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
