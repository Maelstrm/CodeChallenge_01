// [x] create button that has "Generate" text inside
// [x] use jQuery to append a div element when button is clicked
// [x] inside div element, create a <p> element that shows how mnay times the button has been clicked
// [x] insided the clickDiv, append 2 button elements that read "swap" and "delete"
// [x] any div created with the generate click should have a red background
// [x] "Swap" should change its parent background from red to yellow.
// [x] "Swap" again should turn the parent background color back to red
// "Delete" should remove its parent div and all of its contents


// store global variables here
let totalClicks = 0;

// keeps track of the clickDiv background color
let red = true;

// waits for page to initialize 
$(readyNow);

// when the page is ready, run these functons
function readyNow() {
    eventHandlers();
} // readyNow end


// this is where handlers go.
function eventHandlers() {
    $('#generateButton').on('click', generateClick);
} // eventHandlers end

// generate Click
function generateClick() {

    // updates counter
    clickCounter();

    //clears the div that holds the counter and its buttons
    $('#clickDiv').remove;
    $('#generateParent').append('<div id="clickDiv"></div>');
    $('#clickDiv').html('<p>' + totalClicks + '</p>');

    //appends "Swap" & "Delete" buttons
    $('#clickDiv').append('<button id="swapButton">Swap</button>' + '<button id="deleteButton">Delete</button>');

    // reloads the event handler for "Delete" and "Swap"
    clickDeleteHandler();
} // end generateclick

// tracks the number of clicks
function clickCounter() {
    totalClicks += 1;
    return totalClicks;
} // end clickCounter


function clickDeleteHandler() {
    // eventHandlers for "Swap" and "Delete"
    $('#swapButton').on('click', swapButtonClick);
    $('#deleteButton').on('click', deleteButtonClick);
}

function swapButtonClick() {

    // if the value of red is true...
    if (red) {
        $('#clickDiv').css('background-color', 'yellow');
        red = false;
        return red;
    }

    // if the value of red is not true
    else {
        $('#clickDiv').css('background-color', 'red');
        red = true;
        return red;
    }
}

function deleteButtonClick() {

    // Deletes the generate div
    $('#clickDiv').remove();

    // clears the counter
    totalClicks = 0;
    return totalClicks;
}