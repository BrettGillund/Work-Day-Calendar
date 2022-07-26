// get date functioning in header
// when the application loads the current date loads.

var form = $('form');
var past = new Date()
var saveBtn = $('.saveBtn');
var inputText = $('.textarea');



$(document).ready(() => {
    $(saveBtn).on('click', (event) => {
        event.preventDefault();
        const txt = ($(event.currentTarget).siblings('input').val())
        const hour = ($(event.currentTarget).siblings('input').attr('id'))
        localStorage.setItem(hour, txt);

        if (localStorage.getItem(hour)) {
            alert(`you have saved ${txt} at ${hour}`);
        };
    });

function currentDay() {
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    var currentTime = moment().hours();
    $('.desciption').each(function(){
        var listHours = parseInt($(this).attr('id').substr(0));

        if (listHours > currentTime) {
            $(this).addClass('future')
        }
        if (listHours < currentTime) {
            $(this).removeClass('present')
            $(this).addClass('past')
        }
        if (listHours === currentTime) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } 
    })
    };

currentDay();

$('#9AM').val(localStorage.getItem('9AM'));
$('#10AM').val(localStorage.getItem('10AM'));
$('#11AM').val(localStorage.getItem('11AM'));
$('#12PM').val(localStorage.getItem('12PM'));
$('#13PM').val(localStorage.getItem('13PM'));
$('#14PM').val(localStorage.getItem('14PM'));
$('#15PM').val(localStorage.getItem('15PM'));
$('#16PM').val(localStorage.getItem('16PM'));
$('#17PM').val(localStorage.getItem('17PM'));
$('#18PM').val(localStorage.getItem('18PM'));

});



// if else checks checking current hour with listHours. 



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

