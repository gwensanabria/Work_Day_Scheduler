$(document).ready(function () {
    //current date and time
    let mo = moment();
    let currentTime = mo.format('MMMM Do YYYY, h:mm:ss a');
    let currentDate = mo.format("dddd, MMM Do YYYY");
    // console.log('current time: ', currentTime)

    $("#currentDay").text(currentDate);
});

$("#clear").click(function(clearReload) {
    localStorage.clear();
    location.reload()
    // console.log(clearReload)
});
