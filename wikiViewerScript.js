$(document).ready(function() {


  $('#searchform').submit(function(event) {
    event.preventDefault();
console.log("anon submit function run");


    var searchQuery =  $('#searchString').val();
    console.log(searchQuery);
event.preventDefault();
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
        data: {
          action: 'opensearch',
          search: searchQuery,
          limit: 3,
          format: 'json'
        },

      type: 'GET',
      headers: {
        'Api-User-Agent': 'dverdin83GithubProfiledverdin83@gmail.com'
      },
      success: function(data) {
        var searchResultTitle = data[0];

        var dataResultThreeTitle = data[1][2];
        var dataResultThreeLink = data[3][2];
        console.log(searchResultTitle);
        console.log(data);
        //for (var i in data) console.log(data[i])
        $("#searchTitle").text(searchResultTitle);

        $("#resultOneTitle").text(data[1][0]);
        $("#resultTwoTitle").text(data[1][1]);
        $("#resultThreeTitle").text(data[1][2]);

        $("#resultOneContent").text(data[2][0]);
        $("#resultTwoContent").text(data[2][1]);
        $("#resultThreeContent").text(data[2][2]);


        $("#linkOne").html("<p><em>Further Reading:</em></p><p> <a href=\"" + data[3][0] + "\" target=\"_blank\">" + data[1][0] + "</a> </p>");
        $("#linkeTwo").html("<p> <a href=\"" + data[3][1] + "\" target=\"_blank\">" + data[1][1] + "</a> </p>");
        $("#linkThree").html("<p> <a href=\"" + data[3][2] + "\" target=\"_blank\">" + data[1][2] + "</a> </p>");
      }
    });



});

});
