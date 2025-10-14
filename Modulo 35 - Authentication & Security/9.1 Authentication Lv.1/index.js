import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import crypto from 'crypto';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const dbClient = new pg.Client(
  {
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'postgres'
  }
);
dbClient.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  // TODO: Agregar usuario
  const email = req.body.username;
  const pass = req.body.password;
  const hashPass =  crypto.createHash('sha256').update(pass).digest('hex');

  var result  = await dbClient.query(
    'SELECT 1 FROM users as u  WHERE u.email = $1 ',
    [email]
  );
  if (result.rows.length > 0){
    res.send('Email already exists. Try logging in.')
    return;
  }

  result = await dbClient.query(
    'INSERT INTO users(email, password) VALUES ($1, $2 )',
    [email, hashPass],
  );
  if (result.rowCount === 0) {
    res.send('There was an internal server error (I\' sorry)');
  } else {
    res.render('secrets.ejs');
  }
});

app.post("/login", async (req, res) => {
  // Autenticar
  const email = req.body.username;
  const pass = req.body.password;
  const hashPass =  crypto.createHash('sha256').update(pass).digest('hex');
  const result = await dbClient.query(
    'SELECT email, password FROM users u WHERE u.email = $1::text AND u.password = $2::text',
    [email, hashPass],
  );
  if (result.rows.length === 0) {
    res.send('User not found');
  } else {
    res.render('secrets.ejs');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
