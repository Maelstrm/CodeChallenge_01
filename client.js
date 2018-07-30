// [x] create button that has "Generate" text inside
// [x] use jQuery to append a div element when button is clicked
// [x] inside div element, create a <p> element that shows how mnay times the button has been clicked
// [x] insided the clickDiv, append 2 button elements that read "swap" and "delete"
// [x] any div created with the generate click should have a red background
// [x] "Swap" should change its parent background from red to yellow.
// [x] "Swap" again should turn the parent background color back to red
// [x] "Delete" should remove its parent div and all of its contents


// Store global variables here
let totalClicks = 0;

// Keeps track of the clickDiv background color
let red = true;

// Waits for page to initialize
$(readyNow);

// When the page is ready, run these functons
function readyNow() {
    eventHandlers();
} // ReadyNow end


// This is where handlers go.
function eventHandlers() {
    $('#generateButton').on('click', generateClick);
} // EventHandlers end

// Generate Click
function generateClick() {
    // Updates counter
    clickCounter();

    //Clears the div that holds the counter and its buttons
    $('#clickDiv').remove;
    $('#generateParent').append('<div id="clickDiv"></div>');
    $('#clickDiv').html('<p>' + totalClicks + '</p>');

    //Appends "Swap" & "Delete" buttons
    $('#clickDiv').append('<button id="swapButton">Swap</button>' + '<button id="deleteButton">Delete</button>');

    // Reloads the event handler for "Delete" and "Swap"
    clickDeleteHandler();
} // End generateclick

// Tracks the number of clicks
function clickCounter() {
    totalClicks += 1;
    return totalClicks;
} // End clickCounter


function clickDeleteHandler() {
    // EventHandlers for "Swap" and "Delete"
    $('#swapButton').on('click', swapButtonClick);
    $('#deleteButton').on('click', deleteButtonClick);
} // End clickDeleteHandler

function swapButtonClick() {
    // If the value of red is true...
    if (red) {
        $('#clickDiv').css('background-color', 'yellow');
    }

    // If the value of red is not true
    else {
        $('#clickDiv').css('background-color', 'red');
    }

    //changes red boolean to its opposite
    red = !red;
}

function deleteButtonClick() {
    // Deletes the its parent div
    $('#deleteButton').parent().remove();

    // Resets the counter
    totalClicks = 0;
    return totalClicks;
} // End deleteButtonClick