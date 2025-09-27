import inquirer from 'inquirer';
import qr from'qr-image';
import fs from 'fs';


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([{
    message: "Paste your URL here: ",
    name: "url",
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.length < 1) {
      console.log("No URL entered");
      return;
    }
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('answer.png'));
    fs.writeFile('url.txt', answers.url, (err) => {
      console.log('URL saved to url.txt');
      if (err) console.log('Error writing url to file');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong>
      console.log(error);
      console.log("Something went wrong");
    }
  });