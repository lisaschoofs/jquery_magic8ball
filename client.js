$(document).ready(function() {
  console.log('jQuery loaded!');
  eventListener();
});

//Array of responses to select from
var responses = [
  'As I see it, yes',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don’t count on it',
  'It is certain',
  'It is decidedly so',
  'Most likely',
  'My reply is no',
  'Yeah.... Nope.',
  'YAAASSSS!'
];

var randomElement;

function getRandomAnswer() {
  var randomIndex = Math.floor(Math.random() * responses.length);
  var randomElement = responses[randomIndex];
  return randomElement;
}

function eventListener() {
  $('.container').on('click', '#shake', function() {
    console.log('shake button clicked!');
    appendDom();
  });

function appendDom() {
  $('.container').append("<div class='answer'></div>");
    var $el = $(".container").children().last();
    $el.append("<p>" + getRandomAnswer() + "</p>");
  }

}
