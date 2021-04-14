// GENERATE THE HTML PAGES

  const generateTeam = team => {
      const manager = team.manager.map(function(job) {
        let managerHtml = `



        <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            <h2>${job.name}</h2>
            <h3>Manager</h3>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.officeNum}</p>
            </div>
        </div>
    </div> 
        `
        return managerHtml

      });
      

  


  const engineer = team.engineer.map(function(job) {
      let engineerHtml = `
      
      <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            <h2>${job.name}</h2>
            <h3>Engineer</h3>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto${job.email}">${job.email}</a></p>
            <p>Github: <a href="https://github.com/${job.github}" target="blank">${job.github}</p>
            </div>
        </div>
    </div> 
        `
        return engineerHtml
      
  })

  const intern = team.intern.map(function(job) {
    let internHtml = `
    
    <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
          <h2>${job.name}</h2>
          <h3>Intern</h3>
          <p>ID: ${job.id}</p>
          <p>Email: <a href="mailto${job.email}">${job.email}</a></p>
          <p>School: ${job.school}</p>
          </div>
      </div>
  </div> 
      `
      return internHtml

  })
}
    

// We are exporting out an anonymous function
module.exports = team => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
               
            </div>
        </div>
    </div>
</body>
</html>
`
}