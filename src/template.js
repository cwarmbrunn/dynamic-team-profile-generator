// Grants access to the file system functionality
const fs = require("fs");

function generateHTML(data) {
  // Setting team variable empty
  var team = ``;

  // Set i = 1 - we are getting the manager information from the zero index in the data array
  for (let i = 1; i < data.length; i++) {
    // If data role is equal to Intern - return the following
    if (data[i].role === "Intern") {
      team += `
      <!-- START CARD - INTERN -->
      <div class="col-md-3">
      <div class="card col-md-12 mt-4 px-3 shadow-lg">
          <div class="card-header bg-primary text-light">
              <h3 class="employee-name"> ${data[i].name} </h3>
              <h5 class="job-title"><i class="fa fa-mortar-board"></i> ${data[i].role}</h5>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush shadow">
                  <li class="list-group-item"><i class="fa fa-lock"></i> ID: ${data[i].id} </li>
                  <li class="list-group-item"> <i class="fa fa-envelope-o"></i> Email: <a href="mailto:${data[i].email}">${data[i].email}</a> </li>
                  <li class="list-group-item"> <i class="fa fa-apple"></i> School: ${data[i].school}</li>
              </ul>
          </div>
      </div>
  </div>
  <!-- END CARD- INTERN -->`;

      // Else if the role is Engineer
    }
    if (data[i].role === "Engineer") {
      team += `
      <!-- START CARD - ENGINEER -->
      <div class="col-md-3">
      <div class="card mt-4 px-3 shadow-lg">
          <div class="card-header bg-primary text-light">
              <h3 class="employee-name"> ${data[i].name} </h3>
              <h5 class="job-title"><i class="fa fa-desktop"></i> ${data[i].role} </h5>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush shadow">
                  <li class="list-group-item"><i class="fa fa-lock"></i> ID: ${data[i].id} </li>
                  <li class="list-group-item"> <i class="fa fa-envelope-o"></i> Email: <a href="mailto: ${data[i].email}">${data[i].email}</a></li>
                  <li class="list-group-item"> <i class="fa fa-github"></i> GitHub: <a href="https://github.com/${data[i].github}" target="_blank">${data[i].github}</a> </li>
              </ul>
          </div>
      </div>
  </div>
  <!-- END CARD - ENGINEER -->`;
    }
  }
  // HTML Template Begins
  return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Team Profile Page </title>
    
        <!-- Font Awesome CSS Icons -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    
        <!-- Google Font -->
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Open+Sans:wght@600&display=swap');
        </style>
    
        <!-- Bootstrap CDN Style Sheet -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <!-- CSS Style Sheet -->
        <link rel="stylesheet" href="./style.css">
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="../assets/favicon/favicon.ico">
    
    </head>
    
    <body>
        <header class=" bg-danger text-light text-center"> My Team </header>
    
        <!-- START CARD DECK -->
        <div class="card-deck">
            <div class="row">
                <div class="col-md-3">
                    <!-- CARD #1 - MANAGER -->
                    <div class="card mt-4 px-3 d-flex shadow-lg">
                        <div class="card-header bg-primary text-light">
                            <h3 class="employee-name"> ${data[0].name}</h3>
                            <h5 class="job-title"><i class="fa fa-coffee"></i> ${data[0].role}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush shadow ">
                                <li class="list-group-item"><i class="fa fa-lock"></i> ID: ${data[0].id}</li>
                                <li class="list-group-item"><i class="fa fa-envelope-o"></i> Email: <a href="mailto:${data[0].email}">${data[0].email}</a>
    
                                </li>
                                <li class="list-group-item"><i class="fa fa-map-marker"></i> Office Number: ${data[0].officeNumber}</li>
                            </ul>
                        </div>
    
                        <!-- END CARD #1 - MANAGER -->
                    </div>
                </div>

         <!-- DYNAMIC DATA WILL LOAD HERE -->
                    ${team}
               
                <!-- END CARD DECK -->
            </div>
        </div>
    
    
    
    
    </body>
    
    
    <footer>
        <div id="footer-content" class="col-sm-12 text-dark text-center pt-5">Made with ❤️ in Detroit
        </div>
    </footer>
    
    </html>`;
}
// Write File
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generateHTML(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "index.html created!" });
    });
  });
};
module.exports = {
  writeFile,
};
