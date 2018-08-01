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

// Waits for page to initialize
$(readyNow);

// When the page is ready, run these functons
function readyNow() {
    eventHandlers();
} // ReadyNow end


// This is where handlers go.
function eventHandlers() {
    $('.generateButton').on('click', generateClick);
} // EventHandlers end

// Generate Click
function generateClick() {
    // Updates counter
    let totalclicks = clickCounter();

    //Clears the div that holds the counter and its buttons
    // $('#clickDiv').remove;
    $('#generateParent').append('<div id="clickDiv' + totalclicks + '" class="divCont"></div>');
    $('#clickDiv' + totalClicks).html('<p>' + totalClicks + '</p>');

    //Appends "Swap" & "Delete" buttons
    $('#clickDiv' + totalClicks).append('<button id="sw' + totalClicks + '" class="swapButton">Swap</button>' + '<button id="del' + totalClicks + '" class="deleteButton">Delete</button>');

    // Reloads the event handler for "Delete" and "Swap"
    clickDeleteHandler();
} // End generateclick

// Tracks the number of clicks
function clickCounter() {
    totalClicks += 1;
    return totalClicks
} // End clickCounter


function clickDeleteHandler() {
    // EventHandlers for "Swap" and "Delete"
    $('#sw' + totalClicks).on('click', swapButtonClick);
    $('#del' + totalClicks).on('click', deleteButtonClick);
} // End clickDeleteHandler

function swapButtonClick() {
    // button starts off in a div that has an undefined bg property
    // because the bg property is undefined, it will automatically turn red on the first click and add a new property called 'yellow'
    if (this.bg == undefined) {
        $(this).closest('div').css('background-color', 'yellow');
        this.bg = 'yellow';
    }

    // if the property is yellow it will change it to red, and change the bg color
    else if (this.bg == 'yellow') {
        $(this).closest('div').css('background-color', 'red');
        this.bg = 'red';
    }

    // if the property is red it will change it to yellow, and change the bg color.
    else if (this.bg == 'red') {
        $(this).closest('div').css('background-color', 'yellow');
        this.bg = 'yellow';
    }

}

function deleteButtonClick() {
    // Deletes the its parent div
    $(this).closest('div').remove();
} // End deleteButtonClick