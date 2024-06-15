import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//1. Use the inquirer npm package to get user input.

inquirer.prompt([
  {
    name: "Resultado",
    message: "What URL do you what to convert to QR?",
    type: "input"
  }
])
  .then(function(answer) {
    const url = answer.Resultado;
    var qr_png = qr.image(url, {type: "png"});
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    })
    
  });
//2. Use the qr-image npm package to turn the user entered URL into a QR code image.

  

//3. Create a txt file to save the user input using the native fs node module.




