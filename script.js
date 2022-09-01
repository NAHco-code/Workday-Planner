//PAGE LOAD//

//*** GET SAVED ITEMS FROM LOCAL STORAGE ***//

let savedTasksArray = JSON.parse(localStorage.getItem('savedTasksArray'));

//if there are no saved taskObj, render default empty array
if (!savedTasksArray) {

    savedTasksArray = [{
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
        time: 13,
        tasks: ['']
    },
    {
        time: 14,
        tasks: ['']
    },
    {
        time: 15,
        tasks: ['']
    },
    {
        time: 16,
        tasks: ['']
    },
    {
        time: 17,
        tasks: ['']
    }
    ];
}

//*** SET LIVE DATE AND TIME TO PAGE ***//

//link dateTime to DOM element
const currentDateTimeEL = $('#current_date_time');
let dateTime; //empty date variable

//define function to live update current date and time
const update = function () {
    dateTime = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a[.]');
    currentDateTimeEL.text(dateTime); //render dateTime to page
};
//call live dateTime update function
$(document).ready(function () {
    update();
    setInterval(update, 1000)
});

//select each timeblock container(tableRows) and traverse through DOM tree to select textarea, as well as labeled time of each timeblock
const tableRows = $('.row');
tableRows.each(function (index) {
    console.log($(this).children('textarea'))
    const taskEl = $(this).children('textarea')
    let rowHour = $(this).attr('id').split('_')[1]; //split the id(index 1/position 2) of timeblock div to select the labled time
    console.log($(this).attr('id'));
    //if statement, comparing actual time, to labeled time(on time blocks), to determine whether each timebkock is in the past, present, or future, at any given point
    if (moment().hours() < rowHour) {
        taskEl.addClass('future')
    }
    else if (moment().hours() == rowHour) {
        taskEl.addClass('present')
    }
    else {
        taskEl.addClass('past')
    }
    //create variables to make the time and tasks object keys(in savedTasksArray) selectable  //link both object keys(time + tasks) from savedTasksArray, to html timeblocks
    let taskList = savedTasksArray[index].time;
    let taskText = savedTasksArray[index].tasks;
    //set time and tasks object keys to render in html
    taskEl.html(taskText);
});

//*** SAVE TASK ITEMS TO LOCAL STORAGE ***//

//create variables to make the save button selectable
const saveBtn = $('button');

saveBtn.on('click', function () {
    console.log($(this));
    //traverse through taskList variable(this), sibling DOM tree element, to select entered value of ‘textarea’ element //traversing keeps things in current context
    let inputText = $(this).siblings('textarea').val();
    //traverse through taskList variable (this), up DOM tree(parent), to select labeled hour of timeblocks
    let rowHour = $(this).parent().attr('id').split('_')[1];
    //if statement to evaluate - if there is a value in a ‘textarea’ element, to loop through the savedTasksArray and push the value onto the array if the labeled time on timeblock matches the time value in the savedTasksArray
    if (inputText) {
        savedTasksArray.forEach(function (taskObj) {
            if (taskObj.time == rowHour) {
                taskObj.tasks.push(inputText);
            }
        })
        //set stringified savedTasksArray(with pushed ‘textarea’ value) into local storage
        localStorage.setItem('savedTasksArray', JSON.stringify(savedTasksArray))
    }
});

// retrieve parsed array from local storage on page load //written at top
