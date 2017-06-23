$(document).ready(function() {
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

//returns a random answer from the responses array
function getRandomAnswer() {
  var randomIndex = Math.floor(Math.random() * responses.length);
  var randomElement = responses[randomIndex];
  return randomElement;
}

//on click, hides any existing responses and runs appendDom
function eventListener() {
  $('.container').on('click', '#shake', function() {
    $(".answer").children().last().hide();
    appendDom();
  });

//appends a random answer to the DOM & fades it out
function appendDom() {
  $('.answer').append("<div></div>");
    var $el = $(".answer").children().last();
    $el.append("<p>" + getRandomAnswer() + "</p>");
    $el.fadeOut(5000);
  }

}
