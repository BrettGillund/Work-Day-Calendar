// get date functioning in header
// when the application loads the current date loads.

var form = $('form');
var past = new Date()
var saveBtn = $('.saveBtn');
var inputText = $('.textarea');



$(document).ready(() => {
    $(saveBtn).on('click', (event) => { // event listener for each save button.
        event.preventDefault();
        const txt = ($(event.currentTarget).siblings('input').val())
        const hour = ($(event.currentTarget).siblings('input').attr('id'))
        localStorage.setItem(hour, txt); // saves entered text to local storage.

        if (localStorage.getItem(hour)) { // alert message when data is saved to local storage.
            alert(`you have saved ${txt} at ${hour}`);
        };
    });

function currentDay() { // date and time operated functions.
    $('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));
    var currentTime = moment().hours();
    $('.desciption').each(function(){
        var listHours = parseInt($(this).attr('id').substr(0));

        if (listHours > currentTime) { // sets class of future for hours that have not occured.
            $(this).addClass('future')
        }
        if (listHours < currentTime) { // sets class of past to hours that have occured.
            $(this).removeClass('present')
            $(this).addClass('past')
        }
        if (listHours === currentTime) { // sets class of present to the current hour.
            $(this).removeClass('past')
            $(this).addClass('present')
        } 
    })
    };

currentDay();

//if there is local storage that has a key equal to the id the saved text.
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






// -------------------------sandbox and method -------------------------------//

// create the layout of time in html.

// create hourly time blocks.

// make past timeblocks grey using .past class. use the var.addClass('past')

// make curremt timeblock red using .present class.

// make future timeblocks green using .future class.

// make the time blocks functional so an event can be entered into them.

// create a save button for each timeblock that saves the event data to local storage.

// when the page refreshes the timeblocks data remains in the block.

// create var for each row.