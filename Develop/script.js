// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(function () {
    $('.saveBtn').on("click", function () {
      var userinput = $(this).siblings(".description").val();
      var timeBlockId = $(this).parent().attr('id')
      localStorage.setItem(timeBlockId, userinput);
    });
    function updateBlock() {
      var currentHour = dayjs().hour();
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // var blockHour = parseInt ($(this).attr("id").split("-")[1])
        if (blockHour < currentHour) {
          $(this).addClass("past").removeClass("present future");
        } else if (blockHour === currentHour) {
          $(this).addClass("present").removeClass("past future");
        } else {
          $(this).addClass("future").removeClass("past present");
        }
      });
    }
      updateBlock();
  
      // gets the the input from the user from local storage and sets of the values for the typed in area
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var savedInput = localStorage.getItem(timeBlockId);
  
        if (savedInput) {
          $(this).find(".description").val(savedInput);
        }
      });
      // Display the current date in the header of the page
      $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
    });
});