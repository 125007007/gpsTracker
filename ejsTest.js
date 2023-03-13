let express = require('express');
let app = express();
let ejs = require('ejs');
let fs = require('fs');
let objectSentFromServer = {lat:'lat', lon:'lon', acc:'acc'} // what you need to send

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/test.html', (err, html) => {
    res.send(ejs.render(html, JSON.stringify(objectSentFromServer)))
  })
})

app.listen(8080, (err) => { console.log(err) })
