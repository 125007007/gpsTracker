const express = require('express')
const app = express()
const port = 3000


let lat = null
let lon = null
let acc = null



app.get('/log', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let acc = req.query.acc
    
    console.log('Your location is: ', lat + ', ' + lon, 'accuracy: ' + acc )


})

app.get('/', (req, res) => {
    let data = {lat:lat, lon:lon, acc:acc}; 
    JSON.stringify(data)
    res.sendFile("C:/Users/Shovel/Documents/gpsTracker/views/index.html", data)
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})