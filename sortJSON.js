// file system module to perform file operations
const fs = require('fs');

const filename = 'output.json'

// change to single object for each locations point and save to json file on each recives
function sortFile(filename){

    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);
    console.log(json)
    // sort array
    //json.points.sort();
    let sortedProducts = json.points.sort(
        (p1, p2) => (p1.time < p2.time) ? 1 : (p1.time > p2.time) ? -1 : 0);
    
    
    console.log(sortedProducts)
    fs.writeFile(filename, JSON.stringify(sortedProducts), function (err) {
        if (err) throw err;
        console.log('The array has been sorted!');
     });
}

sortFile(filename)