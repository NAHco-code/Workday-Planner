// declare global //

const savedTasksObj = [{
    time: 9,
    tasks: ['']    
    },
    {
    time: 10,
    tasks: [''] 
    },
    {
    time: 11,
    tasks: ['']
    },
    {
    time: 12,
    tasks: ['']    
    },
    {
    time: 1,
    tasks: ['']    
    },
    {
    time: 2,
    tasks: ['']    
    },
    {
    time: 3,
    tasks: ['']    
    },
    {
    time: 4,
    tasks: ['']    
    },
    {
    time: 5,
    tasks: ['']    
    }
];

const currentDateTimeEL = $('#current_date_time');
var dateTime; //empty date variable

//define function to live update current date and time
var update = function () {
    dateTime = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a [.]');
    currentDateTimeEL.text(dateTime);
}

$(document).ready(function () {
    update();
    setInterval(update, 1000)
});

// const saveBtn = $('#save_btn');
// const taskEl = $('.desription'); //append task items to DOM elements

// const savedItem = '';
    
// function renderSaved(index) {
//     let taskList = savedTasksObj[index].time + savedTasksObj[index].tasks;
    
//     let taskText = 
//         '<textarea class="description col-8">' + savedTasksObj[index].tasks + '</textarea>';
//     taskEl.innerHTML = taskText;
// };



//save to-do-items to local storage
// saveBtn.addEventListener('click', storeTask()){
    
//     localStorage.setItem('task[]', 'taskText.stringify');
// }


var tableRows = $('.row');
tableRows.each(function (index) {
    console.log($(this).children('textarea'))
    let rowHour = $(this).attr('id').split('_')[1];
    if (moment().hours() < rowHour) {
        $(this).children('textarea').addClass('future')
    }
    else if (moment().hours() == rowHour) {
        $(this).children('textarea').addClass('present')
    }
    else {
        $(this).children('textarea').addClass('past')
    }
});
//var main area

// var hours object //array
// var browser storage

// display date moments.js

// display time blocks
// for loop to appends divs for time blocks

// function color code time block to reflect time of day
//     **first comparison doesn't work**
//     let
//     let
//     for loop
//     if else

// event listener to save input
    
//     push appends item to end of array
//     append saved items in same div to 


// write local storage items to correct row
// if statement
//     for loop
//         let
//         console.log
        

//         when they click on the button, you want to save the value that's in the box, put it into an array (that you stringify ) when you put it back onto the page, you have to parse it. use get item
    