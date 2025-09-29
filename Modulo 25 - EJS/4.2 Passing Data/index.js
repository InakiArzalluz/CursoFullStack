import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Lo busca directamente en la carpeta views ¿¡ !?
  res.render('index.ejs', { title: 'Enter your name below 👇'});
});

app.post("/submit", (req, res) => {
  var title = `There are ${req.body.fName.length + req.body.lName.length} letters in your name.`
  res.render('index.ejs', { title: title });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
