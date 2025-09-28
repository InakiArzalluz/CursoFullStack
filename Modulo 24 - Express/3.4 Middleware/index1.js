import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// middleware to parse the info from the form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // body lo tengo gracias a body-parser
  console.log(req.body);
  res.send("Form submitted!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
