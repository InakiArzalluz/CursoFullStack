import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "marioPergolini";
const yourPassword = "diagonal";
const yourAPIKey = "d59171aa-34cb-44ba-bdcc-496036fbff36";
const yourBearerToken = "d6b884af-5df3-4fa1-b041-012ad20a0a12";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  axios.get('https://secrets-api.appbrewery.com/random')
  .then(function (response) {
    res.render('index.ejs', {content: JSON.stringify(response.data)});
  })
  .catch(function (error) {
    res.render('index.ejs', {content: "There was an error"});
    console.log(error);
  });
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 axios.get( 'https://secrets-api.appbrewery.com/all?page=2', {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  })
  .then(function (response) {
    res.render('index.ejs', {content: JSON.stringify(response.data)})
    // handle success
  })
  .catch(function (error) {
    res.render('index.ejs', {content: "There was an error"});
    console.log(error);
  });
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  //
  axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)
  .then(function (response) {
    res.render('index.ejs', {content: JSON.stringify(response.data)})
  })
  .catch(function (error){
    res.render('index.ejs', {content: "There was an error"});
    console.log(error);
  })
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 var secretId = 22;
 axios(`https://secrets-api.appbrewery.com/secrets/${secretId}`, {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`,
  },
 })
 .then(function (response) {
    res.render('index.ejs', {content: JSON.stringify(response.data)});
 })
 .catch(function (error) {
    console.log(error);
    res.render('index.ejs', {content: "There was an error"});
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
