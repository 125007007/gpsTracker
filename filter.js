// filter output.json by provider eg: "gps" or "network"

const fs = require('fs');
const inputFile = 'output.json'
const outputFile = 'sorted.json'

// filters / seperates 
function filterFile(file, filter){

    var json = fs.readFileSync(file);
    var data = JSON.parse(json);
    var locations = { points:[] }
    newfile = filter + '.json'
    //console.log(data)

    // loop through array of objects and find ones that mtch the filter and push to new array
    data.points.forEach(function(item, index){
        //console.log(item, index)
        if (item.prov == filter){
            console.log(item.prov + ' matches ' + filter)
            locations.points.push(item)
            //console.log('Pushed: ', item, ' to new array')
        }
        
    });
    
    //sort array by time
    locations.points.sort(function (a, b) {
        return a.datetime.localeCompare(b.datetime);
    });

    // write array to file
    fs.writeFile(newfile, JSON.stringify(locations), function (err) {
        if (err) throw err;
        console.log('Wrote array to file with ', filter, ' filter');
    });


}

// change to single object for each locations point and save to json file on each recives
function sortFile(file, sortedFile){

    var json = fs.readFileSync(file);
    var data = JSON.parse(json);
    //console.log(data)
    // sort array
    data.points.sort(function (a, b) {
        return a.datetime.localeCompare(b.datetime);
    });
    //console.log(data.points)
    fs.writeFile(sortedFile, JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Wrote sorted json to file!');
    });


}
sortFile(inputFile, outputFile)
filterFile(inputFile, 'gps')
filterFile(inputFile, 'network')
