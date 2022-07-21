// get date functioning in header
// when the application loads the current date loads.

var form = $('form');
var past = new Date()
var saveBtn = $('.saveBtn');
var inputText = $('.textarea');

// console.log(saveBtn);
// console.log(inputText);



$(document).ready(() => {
    $(saveBtn).on('click', (event) => {
        event.preventDefault();
        // console.log(saveBtn);
        var txt = ($(event.currentTarget).siblings('input').val())
        // var txt = $('[type=text]').val();
        // console.log($(event.currentTarget).siblings('input').val())
        // console.log(event)
        // console.log(inputText.value)
    var hour = ($(event.currentTarget).siblings('label').attr('id'))
    // var hour = $(`label.hour`).attr('id');
    localStorage.setItem(hour, txt);
        console.log(hour);


        // console.log(localStorage.getItem(hour));
        if (localStorage.getItem(hour)) {
            alert(`you have saved ${txt} at ${hour}`);
        };
    })

function checkTime() {
    //if check to check the current time versus the time associated with the time of the 
    // select with jquery (ID or class) dynamically add a class to the sibilings.
    // set intveral and set timeout.
}

$('.hour').val(localStorage.getItem('#9AM'));
$('.hour').val(localStorage.getItem('#10AM'));
$('.hour').val(localStorage.getItem('#11AM'));
$('.hour').val(localStorage.getItem('#12AM'));
$('.hour').val(localStorage.getItem('#13PM'));
$('.hour').val(localStorage.getItem('#14PM'));
$('.hour').val(localStorage.getItem('#15PM'));
$('.hour').val(localStorage.getItem('#16PM'));
$('.hour').val(localStorage.getItem('#17PM'));
$('.hour').val(localStorage.getItem('#18PM'));

});

function currentDay() {
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    var currentTime = moment().hours();
    $('.hour').each(function(){
        var listHours = parseInt($(this).attr('id').substr(0));
        // console.log(listHours);
    })
    // if (listHours)
};

// if else checks checking current hour with listHours. 

currentDay();

// create the layout of time in html.

// create hourly time blocks.


// function renderLastEntry () {
//     var textSaved = $($(this).attr('id'));
// }



// make past timeblocks grey using .past class. use the var.addClass('past')

// make curremt timeblock red using .present class.

// make future timeblocks green using .future class.

// make the time blocks functional so an event can be entered into them.



// console.log(form);

// create a save button for each timeblock that saves the event data to local storage.

// when the page refreshes the timeblocks data remains in the block.




// create var for each row.

