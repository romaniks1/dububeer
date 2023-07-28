function nextpic(){
  var a = music[mus].count - music[mus].numb;
  mus = mus + a + 1;
  if (mus<music.length - 1){
  load();
  list();
  }
  else{
  mus=0;
  load();
  list();
  }
  }
  function prevpic(){  
  var f = music[0].count - 1; 
  if (mus>f){                          //mus должен быть больше чем количество треков в первом альбоме - 1. 
  mus = mus - music[mus].numb;
  mus = mus - music[mus].count + 1;
  load();
  list();
  }
  else{
  mus = music.length - 1;
  mus = mus - music[mus].count + 1;
  load();
  list();
  }
  }
  
 function list(){
 for (var n =1; n<20;n++){
 var text="";
 var trackdel = 'tracklist'+ n;
 document.getElementById(trackdel).innerHTML = text; 
 document.getElementById(trackdel).style.display = "none";
 }
 var i,k;
 var c = music[mus].numb - 1;
 if (randomcheck != 1){
 for(i=0; i<music[mus].count; i++){
 k = i+1;
 if (i == c){
 text = "<b style='background-color:#FF5FA2;'>"+music[mus].name+"</b>";
 var track = 'tracklist'+ k;
 document.getElementById(track).innerHTML = text; 
 document.getElementById(track).style.display = "grid";
} 
else{
var d = mus + 1 - music[mus].numb + i;
text = music[d].name ;
var track = 'tracklist'+ k;
document.getElementById(track).innerHTML = text; 
document.getElementById(track).style.display = "grid";
}
 }
 }
 else{
 var g = -1;
 for(i=0; i<15; i++){
 var k = i+1;
 if (i == 1){
 text= "<b style='background-color:#FF5FA2;'>"+music[mus].name+"</b>";
 var track = 'tracklist'+ k;
document.getElementById(track).innerHTML = text; 
document.getElementById(track).style.display = "grid";
} 
else{
var d = mus - 1 + i;
if (d == -1){
d = music.length - 1;
text= music[d].name;
var track = 'tracklist'+ k;
document.getElementById(track).innerHTML = text; 
document.getElementById(track).style.display = "grid";
}
else if (d == music.length || d>music.length){
g++;
text= music[g].name;
var track = 'tracklist'+ k;
document.getElementById(track).innerHTML = text; 
document.getElementById(track).style.display = "grid";
}
else{
text= music[d].name;
var track = 'tracklist'+ k;
document.getElementById(track).innerHTML = text; 
document.getElementById(track).style.display = "grid";
}
 }
 }
 }
 }
 
var randomcheck;
 
 function load (){
  document.getElementById("namemus").innerHTML = music[mus].name; 
  document.getElementById("myMusic").src = music[mus].src;
  document.getElementById("myImage").src = music[mus].cover;
 }

  
  var music;
  var musicrandom;
  
  var mus = 0;
  function nextmusic(){
  if(mus<music.length - 1){
  mus++;
  load();
  list();
  }
  else{
  mus=0;
  load();
  list();
  }
  }
  
  function prevmusic(){
  if(mus>0){
  mus--;
  load();
  list();
  }
  else{
  mus = music.length - 1;
  load();
  list();
  }
  }
	
window.addEventListener('load', autoplay, false);
  function autoplay(){  
  load();
  document.getElementById("myMusic").onended = function(){
  if (repit != 0){
  if (mus != music.length - 1){
  mus ++;
  }
  else{
  mus = 0;
  }
  }
  this.src = music[mus].src;
  this.play();
  load();
  list();
 
}
 }
  var repit = 1;
  var repitoff = 0;
  var temp;
 function repitfun(){
 temp = repit;
 repit = repitoff;
 repitoff = temp;
 }
 
  

  function random(){
  randomcheck = 1;
  var i, j, k;
  for (i = music.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = music[i]
    music[i] = music[j]
    music[j] = k
  }
  mus = 0; 
  load();
  list();
}

function randomback(){
randomcheck = 0;
  music = musicrandom.slice(0);
  mus=0;
  load();
  list();
}