//a var to track which book a user has selected, on load its the first in the array.
var answerID = "";

$.ajax({
  type: "GET",
  url: "../data/questions.json",
  cache: false,
  dataType: "html",
  data: {
    get_param: 'value'
  },
  //if getting the json is successful
  success: function(data) {
    var data = $.parseJSON(data);
    $.each(data, function(i, questions) {
      $('.question').append(questions.title)
      var answers = $.parseJSON(JSON.stringify(questions.answers))

      $.each(answers, function(i, answers) {
        $('.answers').append("<button class='answer' data-id="+ answers.id + ">" + answers.answer + "</button>")

  });
});
//on click on any answer to set the answerID to its data-id and remove the disabled on the button, add the selected class to the answer and remove any others with the selected class.
$(".answer").click(function(){
  answerID = $(this).attr("data-id");
  $(".submit").removeAttr("disabled");
  $(".submit").removeClass("disabled");
  $('button').removeClass('selected');
  $(this).addClass('selected');
});

//on submit check to see if the answer is correct and display if it is to the user
$(".submit").click(function(){
  if (answerID == "5") {
    console.log("right");
    $('.right').css('display', 'flex');
  } else {
    $('.wrong').css('display', 'flex');
  }
});
// allows the user to play again.
$(".tryAgain").click(function(){
  answerID = "0";
  $('.wrong').css('display', 'none');
  $('.right').css('display', 'none');
  $(".submit").attr('disabled', 'true');
  $('button').removeClass('selected');
  $(".submit").addClass("disabled");
});

  },

});
