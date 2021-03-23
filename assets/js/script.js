// Display Current Datetime on Jumbotron
workdayTime();

function workdayTime() {
  var workdayDatetime = $("#currentDay").text(moment().format('dddd, MMMM Do h:mm:ss A'));
  setTimeout(workdayTime, 1000);
}

// Clicking the save button to store the text in the time blocks in localStorage //
// and once the page is refreshed, the text will still be present //

$(".saveBtn").on("click", function () {
  var textData = $(this).siblings("textarea").val()
  var timeClock = $(this).parent().attr('id')
  console.log('textData', textData, timeClock);
  localStorage.setItem(timeClock, textData);
});

// Color coding for time block based on whether the block is in the past //
// present, or future /

let currentHour = moment().hours();

// the '#' denotes that we are iterating through all of the IDs which in this case are on the divs and 
// which point to individual time blocks which we then traverse to children elements (textarea) to add the class color

for (let i = 9; i <= 17; i++) {
  $('#' + i).children('textarea').val(localStorage.getItem(i)) 

  if (i < currentHour) {
    $("#" + i).children('textarea').addClass("past")

  } else if (currentHour === i) {
    $("#" + i).children('textarea').addClass("present")
  }

  else {
    $("#" + i).children('textarea').addClass("future")
  }
}