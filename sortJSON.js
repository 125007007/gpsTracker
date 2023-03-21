// file system module to perform file operations
const fs = require('fs');

const filename = 'output.json'

// change to single object for each locations point and save to json file on each recives
function sortFile(filename){

    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);
    console.log(json)
    // sort array
    json.points.sort(function (a, b) {
        return a.datetime.localeCompare(b.datetime);
    });
    console.log(json.points)
}

sortFile(filename)