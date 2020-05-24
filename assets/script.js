$(document).ready(function () {
    //current date and time
    let mo = moment();
    // let currentTime = mo.format('MMMM Do YYYY, h:mm:ss a');  /// Month date year, hour: minutes: seconds am/pm
    let currentDate = mo.format("dddd, MMMM Do YYYY"); // Day, Month Date Year
    console.log('Current Date: ', currentDate)

    // current date and time placed under title
    $("#currentDay").text(currentDate);


    // event listener for save buttons to add to local storage
    // $(".saveBtn").on("click", function () {
    //     console.log("save");
    //     let click = $(this).attr("data-value");
    //     let eventInput = $(click).val();
    //     localStorage.setItem(click, eventInput);
    // });


    $('#saveBtn').on('click', function () {
        let save = $(this).attr('#input');
        let textInput = $(save).val();
        localStorage.setItem(save, textInput);
        console.log('click saveBtn')
    })
    
    //store textArea when saveBtn clicked
    // $('.saveBtn').on('click', function () {
    //     let textInput = $('.textInput');
    //     textInput.value = localStorage.getItem('savedContent');
    //     localStorage.setItem('savedContent', textInput.value);
    //     console.log("save");
    // });

     //store textArea when saveBtn clicked
    // $('#saveBtn').on('click', function () {
    //     let textInput = $('#input');
    //     textInput.value = localStorage.getItem('savedContent');
    //     localStorage.setItem('savedContent', textInput.value);
    //     console.log("save");
    // });

    // load from local storage on page load

    // on refresh, loop through time block and grab values from local storage 'getItem' what happens if you don't have a value in a certain time block (this may or may not happen).
    let timeArr = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    
    for (let i = 0; i < timeArr.length; i++) {
        let savedEvent = $('.textInput')
        console.log('looping through timeArr');        
        $(timeArr[i]).val(localStorage.getItem(timeArr[i]));
    };
    

    // Change color of time slots
    function changeColor() {
        for (let i = 6; i < 18; i++) {

            let hour = '#' + i;
            let currentTime = moment().hours();
            let timeSlot = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                timeSlot > currentTime) {
                $(hour).attr("class", "row future");
            }
            else if (
                timeSlot === currentTime) {
                $(hour).attr("class", "row present");
            }
            else if (
                timeSlot < currentTime) {
                $(hour).attr("class", "row past");
            }

        };
    }
    changeColor();

    // clear button clears localstorage and reload page
    $("#clear").click(function(clearReload) {
    localStorage.clear();
    location.reload()
    // console.log(clearReload)
});

});