//declare variables //
var dateTime; //empty date variable
const currentDateTimeEL = $('#current_date_time'); //link to html

//define function to live update current date and time
var update = function () {
    dateTime = moment().format('dddd, MMMM Do YYYY [at] h:mm a [.]');
    currentDateTimeEL.text(dateTime);
}

$(document).ready(function () {
    update();
    setInterval(update, 1000)
});    

var tableRows = $('#row');
var tableBody = $('#container container-fluid');
$(function ()){
    $('#')
}
//var main area

//var hours object //array
//var browser storage

//display date moments.js

//display time blocks
//for loop to appends divs for time blocks

//function color code time block to reflect time of day
    //**first comparison doesn't work**
    //let
    //let
    //for loop
    //if else

//event listener to save input
    //
    //push appends item to end of array
    //append saved items in same div to 


//write local storage items to correct row
//if statement
    //for loop
        //let
        //console.log
        //
    