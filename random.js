//picks a random string and inserts into html on site reload. thanks tobi
//this is also very easily reverse engineerable? So Um. Feel Free
var theText = new Array()
  theText[0] = 'hello';
  theText[1] = 'welcome back';
  theText[2] = 'thanks for visiting';
  theText[3] = "Hey, you. You're finally awake.";
  theText[4] = "shoutout to Yugoslavia";
  theText[5] = "Get In The Groove!";
  theText[6] = '🐕🖥️🎹';
  theText[7] = "i am in your walls";
  theText[8] = "made with love";
  theText[9] = "made with an uncomfortable amount of stackoverflow";        //this actually wasn't that bad. however as of typing this, i don't know js at all
  theText[10] = "the fruity ass BITCH";
  theText[11] = "rise and shine";
  theText[12] = "i'm too bored to keep coming up with quirky little messages";
  theText[13] = 'i love dogs';
  theText[14] = "im hungry";
  theText[15] = "honestly a good time for a so-called 'nap'";               //i actually rarely nap
  theText[16] = "Would you look at the time!";
  theText[17] = "don't refresh this too much";                              //i hope this feature doesn't accidentally make people send a bunch of requests LMAOD
  theText[18] = "if two wrongs don't make a right, try three";
  theText[19] = "eating your cables right now";
  theText[20] = "also try NotITG";
  theText[21] = "the questions page is pretty cool..";
  theText[22] = "bark";
  theText[23] = "slipped on a banan";
  theText[24] = "me when i defgecd";
  theText[25] = "time to get funky";
  theText[26] = "yet another internet dog.."                                //idk how to make this the """"default"" because i like this phrase the most
//other array stuff here//

var j = 0
var p = theText.length;
var preBuffer = new Array()
for (i = 0; i < p; i++) {
    preBuffer[i] = new Array()
    preBuffer[i].src = theText[i]
}
var whichText = Math.round(Math.random() * (p - 1));

//change div id here
document.getElementById('randomjs').innerHTML = '<small>' + theText[whichText] + '</small>';