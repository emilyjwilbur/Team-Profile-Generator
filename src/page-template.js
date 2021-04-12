// HTML TEMPLATE GOES HERE
// GENERATE THE HTML PAGES
const makeTeam = team => {
    // a method for a template to render manager info

    // a method for a template to render engineer info

    // a method for a template to render intern info

}
const generateTeam = team => {
    const  generateManager = manager = {
        return `${manager.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        return html.join("");
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
                YOUR METHOD GOES HERE....THE CARDS OF MANAGER, INTERN, ENGINEER WILL BE HERE.
                ${someFunction(team)}
            </div>
        </div>
    </div>
</body>
</html>
`
}