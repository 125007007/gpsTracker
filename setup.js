const fs = require('fs');


var data = {
    points:[
        {
            lat: null,
            lon: null,
            acc: null,
            datetime: null,
            batt: null,
            ischarging: null

        }
    ]
}

fs.writeFile("output.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('The file "output.json" was created!');
    });