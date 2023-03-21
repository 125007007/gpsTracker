// file system module to perform file operations
const fs = require('fs');

const filename = 'output.json'

// change to single object for each locations point and save to json file on each recives
function readJson(filename){

    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);
    //console.log('data: ', data)
    //console.log('json: ', json)
    //console.log(json.points[lat])
    for(var i =0; i<json.points.length;i++){
        console.log(json.points[i].lat);
        console.log(json.points[i].lon);
    }


}

readJson(filename)