// declare global //
// retrieve from local storage on page load
let savedTasksArray = JSON.parse(localStorage.getItem('savedTasksArray'));
//if there are no saved tasks, load default empty array
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

const currentDateTimeEL = $('#current_date_time');
var dateTime; //empty date variable

//define function to live update current date and time
var update = function () {
    dateTime = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a[.]');
    currentDateTimeEL.text(dateTime);
};

$(document).ready(function () {
    update();
    setInterval(update, 1000)
});

var tableRows = $('.row');
tableRows.each(function (index) {
    console.log($(this).children('textarea'))
    var taskEl = $(this).children('textarea')
    let rowHour = $(this).attr('id').split('_')[1]; //select the id of timeblock div index[1] to get labled time
    if (moment().hours() < rowHour) {
        taskEl.addClass('future')
    }
    else if (moment().hours() == rowHour) {
        taskEl.addClass('present')
    }
    else {
        taskEl.addClass('past')
    }
    //render saved array objects
    let taskList = savedTasksArray[index].time;
    let taskText = savedTasksArray[index].tasks;
    taskEl.html(taskText);
    console.log(rowHour, taskList);
});

//append task items to DOM elements
// save to-do-items to local storage
const saveBtn = $('button');
const userInputEl = $('textarea')

saveBtn.on('click', function (taskListEl) {
    console.log($(this));
    let inputText = $(this).siblings('textarea').val();
    console.log(inputText);
    console.log($(this).parent());
    let rowHour = $(this).parent().attr('id').split('_')[1];
    
    if (inputText) {

        savedTasksArray.forEach(function (taskObj, index) {
    
            if (taskObj.time == rowHour) {
                taskObj.tasks.push(inputText);
            }
        })
        localStorage.setItem('savedTaskObj', JSON.stringify(savedTasksArray))
    }    
});

