// file system module to perform file operations
const fs = require('fs');

const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')


var LocalHistory = {
    points: []
}

// change to single object for each locations point and save to json file on each recives
function addToFile(points){

    var data = fs.readFileSync('output.json');
    var json = JSON.parse(data);
    json.points.push(...points);
    
    fs.writeFile("output.json", JSON.stringify(json), function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
     });
    //console.log(LocalHistory.points)
    LocalHistory.points.length = 0;
    //console.log(LocalHistory.points)
}

app.get('/log', (req, res) => {
    var lat = req.query.lat
    var lon = req.query.lon
    var acc = req.query.acc
    var datetime = req.query.time
    var splitdateitme = datetime.split('T')
    console.log(splitdateitme)
    // split time and date into seperate key:value pairs`
    var date = splitdateitme[0]
    var time = splitdateitme[1]
    var time = time.substring(0, time.length-1);
    console.log(time)
    console.log(date)
    var location = {lat:lat, lon:lon, acc:acc, date:date, time:time};
    LocalHistory.points.push(location)
    console.log(location);
    addToFile(LocalHistory.points)
    //console.log('Your location is: ', lat + ', ' + lon, 'accuracy: ' + acc )
})

app.get('/', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    let data = fs.readFileSync('output.json');
    let json = JSON.parse(data);
    let lastLocation = json.points.slice(-1)[0]
    res.render('pages/index', {lastLocation})
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})