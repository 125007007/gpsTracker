var datetime = '2023-03-21T01:40:16.699Z'

var datetime = datetime.replace('T', ' ')
var datetime = datetime.substring(0, datetime.length-1);

console.log(datetime)

    // split timestamp into date and time
/*var splitdateitme = datetime.split('T')
console.log(splitdateitme)
    // split time and date into seperate key:value pairs
console.log(splitdateitme[0])
console.log(splitdateitme[1])
var date = splitdateitme[0]
var time = splitdateitme[1].substring(0, splitdateitme[1].length-1);
var time = time.concat(' ', time)
var blank = ''
var datetime = blank.concat(date, time)
console.log(date, time)
console.log(datetime)*/