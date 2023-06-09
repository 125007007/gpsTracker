// file system module to perform file operations
const fs = require('fs');

const express = require('express')
const app = express()
const port = 3000
const filename = 'output.json'
app.set('view engine', 'ejs')


var LocalHistory = {
    points: []
}

// change to single object for each locations point and save to json file on each recives
function addToFile(newData){
    console.log('length of newData.points: ', newData.points.length)
    //console.log('testing: ', newData)
    var data = fs.readFileSync(filename);
    var json = JSON.parse(data);

    var prevLocation = json.points.slice(-1)[0];

    console.log('file', prevLocation.lat, ' new', newData.points.slice(-1)[0].lat)
    console.log('file', prevLocation.lon, ' new', newData.points.slice(-1)[0].lon)
    if (prevLocation.lat != newData.points.slice(-1)[0].lat || prevLocation.lon != newData.points.slice(-1)[0].lon){
        json.points.push(...newData.points);
        fs.writeFile(filename, JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('The points were appended to the file!');
        });
        //console.log(LocalHistory.points)
        LocalHistory.points.length = 0;
        //console.log(LocalHistory.points)
    } else {
        console.log('Ignored point as was the same as last one.')
        LocalHistory.points.length = 0;
    }
}

app.get('/log', (req, res) => {
    var lat = req.query.lat
    var lon = req.query.lon
    var acc = req.query.acc
    var datetime = req.query.time
    var batt = req.query.batt
    var ischarging = req.query.ischarging
    //new paramiters
    var spd = req.query.spd
    var dir = req.query.dir
 
    var location = {
        lat:lat,
        lon:lon,
        acc:acc,
        datetime:datetime,
        batt:batt, 
        ischarging:ischarging,
        spd:spd,
        dir:dir
    };

    LocalHistory.points.push(location)
    //console.log(location);
    addToFile(LocalHistory)
    res.end()
    //console.log('Your location is: ', lat + ', ' + lon, 'accuracy: ' + acc )
})

app.get('/', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    let data = fs.readFileSync(filename);
    let json = JSON.parse(data);
    let lastLocation = json.points.slice(-1)[0]
    res.render('pages/index', {lastLocation})
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})