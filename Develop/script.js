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

const currentDateTimeEL = $('#current_date_time');
var dateTime; //empty date variable

//define function to live update current date and time
var update = function () {
    dateTime = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a[.]');
    currentDateTimeEL.text(dateTime);
}

$(document).ready(function () {
    update();
    setInterval(update, 1000)
});

var tableRows = $('.row');
tableRows.each(function (index) {
    console.log($(this).children('textarea'))
    let rowHour = $(this).attr('id').split('_')[1]; //select the id of timeblock div index[1] to get labled time
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


//append task items to DOM elements
const taskEl = $('.desription'); 
var taskListEl = $('.time-block');

taskListEl.each(function renderSaved(index) {
    let taskList = savedTasksObj[index].time;
    let taskText = savedTasksObj[index].tasks;
    taskListEl.innerHTML = taskList;
    taskEl.innerHTML = taskText;
});

// console.log(taskListEl);

// save to-do-items to local storage
const saveBtn = $('button');
// saveBtn.on('click', function(taskListEl) {
//     Storage.prototype.set
// });

// // retrieve from local storage
// var retrievedTasks = localStorage.getItem('savedTaskObj', JSON.parse('taskText'));
