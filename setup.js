const fs = require('fs');


var data = {
    points:[]
}

fs.writeFile("output.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('The file "output.json" was created!');
    });