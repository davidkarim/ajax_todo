// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready page:load", function() {
  $('#new_task').on("ajax:success", newTask);
  // #new_task is the name of the form (inspect the element)

  function newTask(event, html, status, xhr) {
    // window.location.reload();
    console.log(arguments); // Name of arguments comes from viewing this console; it shows the arguments coming in.
    $('ol').append(html);
    $('#task_name').val('');
  }
});
