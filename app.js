const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

const data = ['test'];

app.get('/log', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let acc = req.query.acc

    let location = {lat:lat, lon:lon, acc:acc};
    data.push(location)
    console.log(location);
    console.log(location.lat, location.lon, location.acc);
    //console.log('Your location is: ', lat + ', ' + lon, 'accuracy: ' + acc )
})

app.get('/', (req, res) => {
    let lastLocation = data.slice(-1)[0]
    res.render('pages/index', {lastLocation})
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})