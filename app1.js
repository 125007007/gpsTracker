// file system module to perform file operations
const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')


var LocalHistory = {
    points: []
}


app.get('/log', (req, res) => {
    var lat = req.query.lat;
    var lon = req.query.lon;
    var acc = req.query.acc;
    var datetime = req.query.time;
    var batt = req.query.batt
    var ischarging = req.query.ischarging
    // strip off T and Z from time
    /*
    var datetime = datetime.replace('T', ' ')
    var datetime = datetime.substring(0, datetime.length-1);
    */
    var location = {
        lat:lat, 
        lon:lon, 
        acc:acc, 
        datetime:datetime,
        batt:batt, 
        ischarging:ischarging
    };
    if (LocalHistory.points.length > 10){
        LocalHistory.points.length = 0;
    }
    LocalHistory.points.push(location);
    //console.log(location);
    res.end()
    //addToFile(LocalHistory.points)
    //console.log('Your location is: ', lat + ', ' + lon, 'accuracy: ' + acc )
})


app.get('/', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    //let data = fs.readFileSync('output.json');
    //let json = JSON.parse(data);

    let lastLocation = LocalHistory.points.slice(-1)[0];
    console.log('Length: ', LocalHistory.points.length)
    res.render('pages/index', {lastLocation});
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})