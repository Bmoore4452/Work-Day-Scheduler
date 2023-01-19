// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentTime = dayjs().hour();

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function start() {
    for (var i = 8; i <= 17; i++) {
      // create
      var div = $("<div>");
      var hourEl = $("<div>");
      var textarea = $("<textarea>");
      var icon = $("<i>");
      var btn = $("<button>");

      // add content and style
      div.addClass("row time-block");
      hourEl.addClass("col-2 col-md-1 hour text-center py-3");
      textarea.addClass("col-8 col-md-10 description");
      btn.addClass("btn saveBtn col-2 col-md-1");
      icon.addClass("fas fa-save");

      // if statement to distinguish am and pm
      var timeOfDay;

      if (i >= 12) {
        timeOfDay = "PM";
      } else {
        timeOfDay = "AM";
      }

      // Account for hours after 12 hour format
      var text = i;
      if (i === 13) {
        text = 1;
      }
      if (i === 14) {
        text = 2;
      }
      if (i === 15) {
        text = 3;
      }
      if (i === 16) {
        text = 4;
      }
      if (i === 17) {
        text = 5;
      }

      div.attr("id",i);
      hourEl.text(text + timeOfDay);

      console.log(currentTime);
      // Setting class for coloring 
      if (currentTime === i) {
        div.addClass("present");
      } else if (currentTime > i) {
        div.addClass("past");
      } else {
        div.addClass("future");
      }

      btn.on("click", click);
      // append
      btn.append(icon);
      div.append(hourEl, textarea, btn);
      $(".container-fluid").append(div);
      // Pull text from local storage
      textarea.text(localStorage.getItem(i))
    }
  }

  function click() {
    // store text data into local storage

    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings("textarea").val()
    );
  }

  start();
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
