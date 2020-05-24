$(document).ready(function () {
    //current date and time
    let mo = moment();
    // let currentTime = mo.format('MMMM Do YYYY, h:mm:ss a');  /// Month date year, hour: minutes: seconds am/pm
    let currentDate = mo.format("dddd, MMMM Do YYYY"); // Day, Month Date Year
    console.log('Current Date: ', currentDate)

    // current date and time placed under title
    $("#currentDay").text(currentDate);


    // clear button clears localstorage and reload page
    $("#clear").click(function(clearReload) {
        localStorage.clear();
        location.reload()
        // console.log(clearReload)
        });

    
    
        // save to local storage
    $('#saveBtn').on('click', function () {
        let save = $(this).attr('#input');
        let textInput = $(save).val();
        localStorage.setItem(save, textInput);
        console.log('click saveBtn')
    })
    
    // //save to local storage
    // $('.saveBtn').on('click', function () {
    //     let textInput = $('.textInput');
    //     // textInput.value = localStorage.getItem('savedContent');
    //     localStorage.setItem('savedContent', textInput.value);
    //     console.log("save");
    // });

    // //save to local storage
    // $('#saveBtn').on('click', function () {
    //     let textInput = $('#input');
    //     // textInput.value = localStorage.getItem('savedContent');
    //     localStorage.setItem('savedContent', textInput.value);
    //     console.log("save");
    // });

    
    let timeArr = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    
    for (let i = 0; i < timeArr.length; i++) {
        let savedEvent = $('.textInput')       
        $(timeArr[i]).val(localStorage.getItem(timeArr[i]));
        // console.log(savedEvent)
        // console.log('looping through timeArr'); 
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

});

