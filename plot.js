// file system module to perform file operations
//const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
//const filename = 'sorted.json'
app.set('view engine', 'ejs')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))


app.get('/', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    //let data = fs.readFileSync(filename);
    //let json = JSON.parse(data);
    //console.log('length json.points: ', json.points.length)
    res.render('pages/route')
})

app.get('/gps', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    //let data = fs.readFileSync(filename);
    //let json = JSON.parse(data);
    //console.log('length json.points: ', json.points.length)
    res.render('pages/plotGps')
})

app.get('/network', (req, res) => {
    //let lastLocation = LocalHistory.points.slice(-1)[0]
    //let data = fs.readFileSync(filename);
    //let json = JSON.parse(data);
    //console.log('length json.points: ', json.points.length)
    res.render('pages/plotNetwork')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})