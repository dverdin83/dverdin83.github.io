//$(document).ready(function() {

  $("#searchform").submit(function(event) {
console.log("anon submit function run");

    var formData = {
      '#searchString' : $('input[name=#searchString]').val()

    };
    console.log(formData);

  /*$.ajax({
    url: https: //en.wikipedia.org/w/api.php,
      data: queryData,
    dataType: 'json',
    type: 'GET',
    headers: {
      'Api-User-Agent': 'dverdin83GithubProfiledverdin83@gmail.com'
    },
    success: function(data) {
      // do something with data
    }
  });*/
});
//})
