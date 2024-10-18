const chrono = require('chrono-node');

var thing2 = chrono.parseDate("Friday at 4pm", {
    // Wed Jun 09 2021 21:00:00 GMT+0900 (JST)
    // = Wed Jun 09 2021 07:00:00 GMT-0500 (CDT)
    //instant: new Date(1623240000000), 
    timezone: "CDT",
})

console.log(thing2);
