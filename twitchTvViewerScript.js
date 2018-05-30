
var twitchUserList = [
  "ESL_SC2",
"OgamingSC2",
"cretetion",
"freecodecamp",
"storbeck",
"habathcx",
"RobotCaleb",
"noobs2ninjas"];

var userQueryDataObj;
var userListings = [];
var liveStreamIds = [];
var userRowIds = [];
var statusMessage ="";

$(document).ready(function() {



$.ajax({
  type: 'GET',
  datatype: 'json',
  url: 'https://api.twitch.tv/helix/users',
  headers: {
    'Client-ID': 'hvi1eclonw260fxgg5kb869fa0twr8'
  },
  data: {login: twitchUserList },
  success: function(response) {
    userQueryDataObj = response;
    for (i=0; i < response.data.length; i++) {
    console.log(response.data[i].display_name);
    userListings.push([
      response.data[i].id,
      0,//
      response.data[i].display_name,
      response.data[i].profile_image_url,
      response.data[i].description,
      response.data[i].view_count,
    ]);

  } // for loop closing brackets
  console.log(userListings);
  console.log(userQueryDataObj);
  console.log(response);
  console.log('1st ajax call complete');
   $.ajax({
    type: 'GET',
    datatype: 'json',
    url: 'https://api.twitch.tv/helix/streams',
    headers: {
      'Client-ID': 'hvi1eclonw260fxgg5kb869fa0twr8'
    },
    data: {user_login: twitchUserList },
    success: function(response) {

    for (i=0; i < response.data.length ; i++) {
    for (x=0; x < userListings.length ; x++) {
      console.log(response.data[i].user_id);
      if ( response.data[i].user_id == userListings[x][0]) {
        userListings[x][1] = 1;
        userListings[x].push(response.data[i].viewer_count);
        userListings[x].push(response.data[i].title);

      }

    }
}
    console.log(response);
    console.log('2nd ajax call');
    //console.log(userListings);
  buildTwitchViewer();

  } // 2nd ajax success closing bracket
}); // 2nd ajax closing bracket
//console.log(userListings);
} // 1st ajax success closing bracket

}); //1st ajax closing braces

//console.log(userListings);


}); //doc ready closing braces

function buildTwitchViewer() {
  console.log(userListings);
  for (i=0; i < userListings.length; i++) {
    $("#userListingsSection").append(
      "<div class=\"row\" id=\"user"+i+"\">"+"</div>"
    );
    userRowIds.push("#user"+i);
  }
  console.log(userRowIds);
  for(i=0;i < userListings.length; i++) {
   if (userListings[i][1] === 1) {
     statusMessage = "is on <mark>live right now!</mark> Broadcasting " + userListings[i][7] + " with " + userListings[i][6] + " viewers watching.";
   }
   else {
     statusMessage = "is not broadcasting at the moment."
   }
$(userRowIds[i]).append("<div class=\"col-xs-12\">" + "<a href=\"https://www.twitch.tv/" + userListings[i][2] + "\" target=\"_blank\">" + userListings[i][2] + "</a> " + statusMessage +"</div>");
$(userRowIds[i]).append("<div class=\"col-xs-12\"><img height=\"200\" width=\"200\"id=\"user" + i + "Image\" src=\"" + userListings[i][3] + "\"></div>");
$(userRowIds[i]).append("<div class=\"col-xs-12\">"+ userListings[i][4] + "<br>" + userListings[i][2] + " has had a lifetime total of " + userListings[i][5] + " unique viewers.</div>");






}

}
