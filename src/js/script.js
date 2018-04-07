//a var to track which book a user has selected, on load its the first in the array.
var obj = 0;
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
        $('.answer').append(answers.answer)

  });
});

  },

});
