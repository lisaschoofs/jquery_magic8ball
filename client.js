$(document).ready(function() {
  console.log('jQuery loaded!');
  eventListener();
});

function eventListener() {
  $('.container').on('click', '#shake', function() {
    console.log('shake button clicked!');
  });
}
