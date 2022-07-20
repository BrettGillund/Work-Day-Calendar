// get date functioning in header
// when the application loads the current date loads.

// var form = $('form');
// var past = new Date()
// var saveBtn = $('.saveBtn').attr('id');

// console.log(saveBtn);



// $(document).ready(() => {
//     $('.saveBtn').on('click', (event) => {
//         event.preventDefault();
//         var txt = $('[type=text]').val();
//     var hour = $(`.hour`).attr('id');
//     localStorage.setItem(hour, txt);
//     var savedText = $('.description').attr('id');
//     // savedText.textContents = (txt);
//         console.log(txt);
//         console.log(hour);
//         console.log(savedText);


//         // console.log(localStorage.getItem(hour));
//         if (localStorage.getItem(hour)) {
//             alert(`you have saved ${txt} at ${hour}`);
//         };
//     })

// });

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





function renderLastEntry () {
    var textSaved = $($(this).attr('id'));
}



// make past timeblocks grey using .past class. use the var.addClass('past')

// make curremt timeblock red using .present class.

// make future timeblocks green using .future class.

// make the time blocks functional so an event can be entered into them.



// console.log(form);

// create a save button for each timeblock that saves the event data to local storage.

// when the page refreshes the timeblocks data remains in the block.




// create var for each row.

