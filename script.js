// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentTime = dayjs().format("H");
  var numberOfSlots = 10;
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function start() {
    for (var i = 1; i <= numberOfSlots; i++) {
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
      // var timeOfDay;
      // if (dayjs().format('H') >= 12){
      //   timeOfDay = "PM"
      // } else{
      //   timeOfDay = "AM"
      // }
      hourEl.text(i + dayjs().format("A"));
      btn.text();
      div.attr("id", "" + i);
      textarea.attr("id", "text" + i);

      var divId = div.attr("id");
      var potId = currentTime;

      console.log(typeof divId);
      console.log(typeof potId);
      if (divId === potId) {
        div.addClass("present");
      } else if (Number(divId) > Number(potId)) {
        div.addClass("future");
      } else {
        div.addClass("past");
      }

      btn.on("click", click);
      // append
      btn.append(icon);
      div.append(hourEl, textarea, btn);
      $(".container-fluid").append(div);
    }
  }

  function click() {
    // store text data into local storage
    for (var i = 1; i < numberOfSlots; i++) {
      var input = $("#text"+i).val();
      console.log(input);
    }
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
