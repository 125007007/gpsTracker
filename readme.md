# GPSLogger Live Tracker

garbage goes here

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* Clone the project
```
git clone https://github.com/125007007/gpsTracker.git
cd gpsTracker
```

* Install dependencies
```
npm install
``` 

### Executing program

* setup.js | creates output.json file with dummy object
```
node setup.js
```
* app.js | logs to output.json and runs live server
```
node app.js
```
* app1.js | runs live server with no logging
```
node app1.js
```
* routeApp.js | shows all points from sorted.json
```
node routeApp.js
```
* playback.js | plays over points based on time | run playBackConver.js first
```
node playBackConvert.js
node playback.js
```


### Location History

* sortJSON.js | sorts output.json by date and time and outputs sorted.json 
```
node sortJSON.js
```
*  routeApp.js | plots all points from sorted.json to map
```
node routeApp.js
```

## Future Features
* Change server logging from JSON to GEOJSON
 
## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
