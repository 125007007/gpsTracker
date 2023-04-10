// file system module to perform file operations
const fs = require('fs');

const filename = 'sorted.json'
const newfile = 'playback.json'

// change to single object for each locations point and save to json file on each recives
function sortFile(filename, newfile){

    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);
    console.log(json)
    // sort array
    json.points.sort(function (a, b) {
        return a.datetime.localeCompare(b.datetime);
    });
    console.log(json.points)
    fs.writeFile(newfile, JSON.stringify(json), function (err) {
        if (err) throw err;
        console.log('Wrote sorted json to file!');
    });


}

function rewriteFile(filename, newfile){
    var locations = []
    var device = []
    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);
    var points = json.points
    //console.log(points)
    points.forEach(function(point, index) {
        var ISOtime = point.datetime;
        var date = new Date(ISOtime)
        var unixtime = date.getTime()
        var offset = date.getTimezoneOffset() * 60 * 1000
        var timestampWithOffset = unixtime - offset;
        console.log(ISOtime, unixtime, offset, new Date(timestampWithOffset))
// need to add the removel of null object
        var location = {
            "lng": parseFloat(point.lon), 
            "lat": parseFloat(point.lat), 
            "time": Math.floor(timestampWithOffset/1000), 
            info:[
                {key: 'Time:', value: point.datetime},
                {key: 'Battery:', value: point.batt},
                {key: 'Charging:', value: point.ischarging},
                {key: 'Altitude:', value: point.alt},
                {key: 'Accuracy:', value: point.acc},
                {key: 'Provider:', value: point.prov},
                {key: 'Distance:', value: point.dist},
                {key: 'Satellites:', value: point.sats}
                
                
            ]}
        //console.log(location)
        device.push(location)
        
    
    })
    //console.log(device)
    locations.push(device)
    //console.log(locations)

    fs.writeFile(newfile, JSON.stringify(device), function (err) {
        if (err) throw err;
        console.log('Wrote locations to file!');
    });

}
rewriteFile(filename, newfile)
//sortFile(filename, newfile)