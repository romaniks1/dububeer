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

  
  var music = [
	{name:"Do not touch", src:"misamo/do.mp3", cover:"misamo/cover.jpg", numb:1, count:7},
	{name:"Behind The Curtain", src:"misamo/behind.mp3", cover:"misamo/cover.jpg", numb:2, count:7},
	{name:"Marshmallow", src:"misamo/marsh.mp3", cover:"misamo/cover.jpg", numb:3, count:7},
	{name:"Funny Valentine", src:"misamo/funny.mp3", cover:"misamo/cover.jpg", numb:4, count:7},
	{name:"It’s not easy for you", src:"misamo/easy.mp3", cover:"misamo/cover.jpg", numb:5, count:7},
	{name:"Rewind you", src:"misamo/rewind.mp3", cover:"misamo/cover.jpg", numb:6, count:7},
	{name:"Bouquet", src:"misamo/bouq.mp3", cover:"misamo/cover.jpg", numb:7, count:7},
	{name:"SET ME FREE", src:"readytobe/setmefree.mp3", cover:"readytobe/cover.jpg", numb:1, count:7},
	{name:"MOONLIGHT SUNRISE", src:"readytobe/moonlight.mp3", cover:"readytobe/cover.jpg", numb:2, count:7},
	{name:"GOT THE THRILLS", src:"readytobe/got.mp3", cover:"readytobe/cover.jpg", numb:3, count:7},
	{name:"BLAME IT ON ME", src:"readytobe/blame.mp3", cover:"readytobe/cover.jpg", numb:4, count:7},
	{name:"WALLFLOWER", src:"readytobe/wall.mp3", cover:"readytobe/cover.jpg", numb:5, count:7},
	{name:"CRAZY STUPID LOVE", src:"readytobe/love.mp3", cover:"readytobe/cover.jpg", numb:6, count:7},
	{name:"SET ME FREE (ENG)", src:"readytobe/seteng.mp3", cover:"readytobe/cover.jpg", numb:7, count:7},
	{name:"Talk that Talk", src:"between/TTT.mp3", cover:"between/cover.jpg", numb:1, count:7},
	{name:"Queen of Hearts", src:"between/QoH.mp3", cover:"between/cover.jpg", numb:2, count:7},
	{name:"Basics", src:"between/basics.mp3", cover:"between/cover.jpg", numb:3, count:7},
	{name:"Trouble", src:"between/trouble.mp3", cover:"between/cover.jpg", numb:4, count:7},
	{name:"Brave", src:"between/brave.mp3", cover:"between/cover.jpg", numb:5, count:7},
	{name:"Gone", src:"between/gone.mp3", cover:"between/cover.jpg", numb:6, count:7},
	{name:"When We Were Kids", src:"between/wwwk.mp3", cover:"between/cover.jpg", numb:7, count:7},
	{name:"Celebrate", src:"celebrate/cel.mp3", cover:"celebrate/cover.jpg", numb:1, count:9},
	{name:"Voices of Delight", src:"celebrate/voice.mp3", cover:"celebrate/cover.jpg", numb:2, count:9},
	{name:"TICK TOCK", src:"celebrate/tick.mp3", cover:"celebrate/cover.jpg", numb:3, count:9},
	{name:"Flow like waves", src:"celebrate/flow.mp3", cover:"celebrate/cover.jpg", numb:4, count:9},
	{name:"That’s all i'm saying", src:"celebrate/that.mp3", cover:"celebrate/cover.jpg", numb:5, count:9},
	{name:"Bitter Sweet", src:"celebrate/bit.mp3", cover:"celebrate/cover.jpg", numb:6, count:9},
	{name:"Sandcastle", src:"celebrate/sand.mp3", cover:"celebrate/cover.jpg", numb:7, count:9},
	{name:"Just be yourself", src:"celebrate/just.mp3", cover:"celebrate/cover.jpg", numb:8, count:9},
	{name:"Doughnut", src:"celebrate/donut.mp3", cover:"celebrate/cover.jpg", numb:9, count:9},
	{name:"SCIENTIST", src:"formula/1scientist.mp3", cover:"formula/cover.jpg", numb:1, count:17},
	{name:"MOONLIGHT", src:"formula/2moonlight.mp3", cover:"formula/cover.jpg", numb:2, count:17},
	{name:"ICON", src:"formula/3icon.mp3", cover:"formula/cover.jpg", numb:3, count:17},
	{name:"CRUEL", src:"formula/4cruel.mp3", cover:"formula/cover.jpg", numb:4, count:17},
	{name:"REAL YOU", src:"formula/5realyou.mp3", cover:"formula/cover.jpg", numb:5, count:17},
	{name:"F.I.L.A (Fall In Love Again)", src:"formula/6fila.mp3", cover:"formula/cover.jpg", numb:6, count:17},
	{name:"LAST WALTZ", src:"formula/7last.mp3", cover:"formula/cover.jpg", numb:7, count:17},
	{name:"ESPRESSO", src:"formula/8espresso.mp3", cover:"formula/cover.jpg", numb:8, count:17},
	{name:"알고 싶지 않아 (REWIND)", src:"formula/9rewind.mp3", cover:"formula/cover.jpg", numb:9, count:17},
	{name:"선인장 (CACTUS)", src:"formula/10cactus.mp3", cover:"formula/cover.jpg", numb:10, count:17},
	{name:"PUSH & PULL (JIHYO, SANA, DAHYUN)", src:"formula/11push.mp3", cover:"formula/cover.jpg", numb:11, count:17},
	{name:"HELLO (NAYEON, MOMO, CHAEYOUNG)", src:"formula/12hello.mp3", cover:"formula/cover.jpg", numb:12, count:17},
	{name:"1, 3, 2 (JEONGYEON, MINA, TZUYU)", src:"formula/13.mp3", cover:"formula/cover.jpg", numb:13, count:17},
	{name:"CANDY", src:"formula/14candy.mp3", cover:"formula/cover.jpg", numb:14, count:17},
	{name:"The Feels (Korean ver.)", src:"formula/15feelskor.mp3", cover:"formula/cover.jpg", numb:15, count:17},
	{name:"The Feels", src:"formula/16feels.mp3", cover:"formula/cover.jpg", numb:16, count:17},
	{name:"SCIENTIST (R3HAB Remix)", src:"formula/17scientistrmx.mp3", cover:"formula/cover.jpg", numb:17, count:17},
	{name:"Perfect World", src:"perfect/1.mp3", cover:"perfect/cover.jpg", numb:1, count:10},
	{name:"BETTER", src:"perfect/2.mp3", cover:"perfect/cover.jpg", numb:2, count:10},
	{name:"Good at Love", src:"perfect/3.mp3", cover:"perfect/cover.jpg", numb:3, count:10},
	{name:"Fanfare", src:"perfect/4.mp3", cover:"perfect/cover.jpg", numb:4, count:10},
	{name:"Kura Kura", src:"perfect/5.mp3", cover:"perfect/cover.jpg", numb:5, count:10},
	{name:"Four-leaf Clover", src:"perfect/6.mp3", cover:"perfect/cover.jpg", numb:6, count:10},
	{name:"In the summer", src:"perfect/7.mp3", cover:"perfect/cover.jpg", numb:7, count:10},
	{name:"PIECES OF LOVE", src:"perfect/8.mp3", cover:"perfect/cover.jpg", numb:8, count:10},
	{name:"Thank you, Family", src:"perfect/9.mp3", cover:"perfect/cover.jpg", numb:9, count:10},
	{name:"PROMISE", src:"perfect/10.mp3", cover:"perfect/cover.jpg", numb:10, count:10},
	{name:"Alcohol-Free", src:"taste/1.mp3", cover:"taste/cover.jpg", numb:1, count:8},
	{name:"First Time", src:"taste/2.mp3", cover:"taste/cover.jpg", numb:2, count:8},
	{name:"Scandal", src:"taste/3.mp3", cover:"taste/cover.jpg", numb:3, count:8},
	{name:"Conversation", src:"taste/4.mp3", cover:"taste/cover.jpg", numb:4, count:8},
	{name:"Baby Blue Love", src:"taste/5.mp3", cover:"taste/cover.jpg", numb:5, count:8},
	{name:"SOS", src:"taste/6.mp3", cover:"taste/cover.jpg", numb:6, count:8},
	{name:"CRY FOR ME (English Ver.)", src:"taste/7.mp3", cover:"taste/cover.jpg", numb:7, count:8},
	{name:"Alcohol-Free (INSTRUMENTAL)", src:"taste/8.mp3", cover:"taste/cover.jpg", numb:8, count:8},
	{name:"I CAN’T STOP ME", src:"open/1.mp3", cover:"open/cover.jpg", numb:1, count:13},
	{name:"HELL IN HEAVEN", src:"open/2.mp3", cover:"open/cover.jpg", numb:2, count:13},
	{name:"UP NO MORE", src:"open/3.mp3", cover:"open/cover.jpg", numb:3, count:13},
	{name:"DO WHAT WE LIKE", src:"open/4.mp3", cover:"open/cover.jpg", numb:4, count:13},
	{name:"BRING IT BACK", src:"open/5.mp3", cover:"open/cover.jpg", numb:5, count:13},
	{name:"BELIEVER", src:"open/6.mp3", cover:"open/cover.jpg", numb:6, count:13},
	{name:"QUEEN", src:"open/7.mp3", cover:"open/cover.jpg", numb:7, count:13},
	{name:"GO HARD", src:"open/8.mp3", cover:"open/cover.jpg", numb:8, count:13},
	{name:"SHOT CLOCK", src:"open/9.mp3", cover:"open/cover.jpg", numb:9, count:13},
	{name:"HANDLE IT", src:"open/10.mp3", cover:"open/cover.jpg", numb:10, count:13},
	{name:"DEPEND ON YOU", src:"open/11.mp3", cover:"open/cover.jpg", numb:11, count:13},
	{name:"SAY SOMETHING", src:"open/12.mp3", cover:"open/cover.jpg", numb:12, count:13},
	{name:"BEHIND THE MASK", src:"open/13.mp3", cover:"open/cover.jpg", numb:13, count:13},
	{name:"MORE & MORE", src:"more/1.mp3", cover:"more/cover.jpg", numb:1, count:7},
	{name:"OXYGEN", src:"more/2.mp3", cover:"more/cover.jpg", numb:2, count:7},
	{name:"FIREWORK", src:"more/3.mp3", cover:"more/cover.jpg", numb:3, count:7},
	{name:"MAKE ME GO", src:"more/4.mp3", cover:"more/cover.jpg", numb:4, count:7},
	{name:"SHADOW", src:"more/5.mp3", cover:"more/cover.jpg", numb:5, count:7},
	{name:"DON’T CALL ME AGAIN", src:"more/6.mp3", cover:"more/cover.jpg", numb:6, count:7},
	{name:"SWEET SUMMER DAY", src:"more/7.mp3", cover:"more/cover.jpg", numb:7, count:7},
	{name:"SWING", src:"&twice/1.mp3", cover:"&twice/cover.jpg", numb:1, count:11},
	{name:"Fake & True", src:"&twice/2.mp3", cover:"&twice/cover.jpg", numb:2, count:11},
	{name:"Stronger", src:"&twice/3.mp3", cover:"&twice/cover.jpg", numb:3, count:11},
	{name:"Breakthrough", src:"&twice/4.mp3", cover:"&twice/cover.jpg", numb:4, count:11},
	{name:"Changing!", src:"&twice/5.mp3", cover:"&twice/cover.jpg", numb:5, count:11},
	{name:"HAPPY HAPPY", src:"&twice/6.mp3", cover:"&twice/cover.jpg", numb:6, count:11},
	{name:"What You Waiting For", src:"&twice/7.mp3", cover:"&twice/cover.jpg", numb:7, count:11},
	{name:"Be OK", src:"&twice/8.mp3", cover:"&twice/cover.jpg", numb:8, count:11},
	{name:"POLISH", src:"&twice/9.mp3", cover:"&twice/cover.jpg", numb:9, count:11},
	{name:"How u doin’", src:"&twice/10.mp3", cover:"&twice/cover.jpg", numb:10, count:11},
	{name:"The Reason Why", src:"&twice/11.mp3", cover:"&twice/cover.jpg", numb:11, count:11},
	{name:"Feel Special", src:"feel/1.mp3", cover:"feel/cover.jpg", numb:1, count:7},
	{name:"RAINBOW", src:"feel/2.mp3", cover:"feel/cover.jpg", numb:2, count:7},
	{name:"GET LOUD", src:"feel/3.mp3", cover:"feel/cover.jpg", numb:3, count:7},
	{name:"TRICK IT", src:"feel/4.mp3", cover:"feel/cover.jpg", numb:4, count:7},
	{name:"LOVE FOOLISH", src:"feel/5.mp3", cover:"feel/cover.jpg", numb:5, count:7},
	{name:"21:29", src:"feel/6.mp3", cover:"feel/cover.jpg", numb:6, count:7},
	{name:"BREAKTHROUGH (Korean Ver.)", src:"feel/7.mp3", cover:"feel/cover.jpg", numb:7, count:7},
	{name:"FANCY", src:"fancy/1.mp3", cover:"fancy/cover.jpg", numb:1, count:6},
	{name:"STUCK IN MY HEAD", src:"fancy/2.mp3", cover:"fancy/cover.jpg", numb:2, count:6},
	{name:"GIRLS LIKE US", src:"fancy/3.mp3", cover:"fancy/cover.jpg", numb:3, count:6},
	{name:"HOT", src:"fancy/4.mp3", cover:"fancy/cover.jpg", numb:4, count:6},
	{name:"TURN IT UP", src:"fancy/5.mp3", cover:"fancy/cover.jpg", numb:5, count:6},
	{name:"STRAWBERRY", src:"fancy/6.mp3", cover:"fancy/cover.jpg", numb:6, count:6},
	{name:"STAY BY MY SIDE", src:"bdz/1.mp3", cover:"bdz/cover.jpg", numb:1, count:11},
	{name:"BDZ", src:"bdz/2.mp3", cover:"bdz/cover.jpg", numb:2, count:11},
	{name:"One More Time", src:"bdz/3.mp3", cover:"bdz/cover.jpg", numb:3, count:11},
	{name:"Candy Pop", src:"bdz/4.mp3", cover:"bdz/cover.jpg", numb:4, count:11},
	{name:"L.O.V.E", src:"bdz/5.mp3", cover:"bdz/cover.jpg", numb:5, count:11},
	{name:"Wishing", src:"bdz/6.mp3", cover:"bdz/cover.jpg", numb:6, count:11},
	{name:"Say it again", src:"bdz/7.mp3", cover:"bdz/cover.jpg", numb:7, count:11},
	{name:"Wake Me Up", src:"bdz/8.mp3", cover:"bdz/cover.jpg", numb:8, count:11},
	{name:"BRAND NEW GIRL", src:"bdz/9.mp3", cover:"bdz/cover.jpg", numb:9, count:11},
	{name:"Be as ONE", src:"bdz/10.mp3", cover:"bdz/cover.jpg", numb:10, count:11},
	{name:"I WANT YOU BACK (영화 ‘センセイ君主’ OST)", src:"bdz/11.mp3", cover:"bdz/cover.jpg", numb:11, count:11},
	{name:"올해 제일 잘한 일", src:"yes/1.mp3", cover:"yes/cover.jpg", numb:1, count:9},
	{name:"Be as ONE (Korean Ver.)", src:"yes/2.mp3", cover:"yes/cover.jpg", numb:2, count:9},
	{name:"YES or YES", src:"yes/3.mp3", cover:"yes/cover.jpg", numb:3, count:9},
	{name:"SAY YOU LOVE ME", src:"yes/4.mp3", cover:"yes/cover.jpg", numb:4, count:9},
	{name:"LALALA", src:"yes/5.mp3", cover:"yes/cover.jpg", numb:5, count:9},
	{name:"YOUNG & WILD", src:"yes/6.mp3", cover:"yes/cover.jpg", numb:6, count:9},
	{name:"SUNSET", src:"yes/7.mp3", cover:"yes/cover.jpg", numb:7, count:9},
	{name:"AFTER MOON", src:"yes/8.mp3", cover:"yes/cover.jpg", numb:8, count:9},
	{name:"BDZ (Korean Ver.)", src:"yes/9.mp3", cover:"yes/cover.jpg", numb:9, count:9},
	{name:"Dance The Night Away", src:"summer/1.mp3", cover:"summer/cover.jpg", numb:1, count:9},
	{name:"CHILLAX", src:"summer/2.mp3", cover:"summer/cover.jpg", numb:2, count:9},
	{name:"Shot thru the heart", src:"summer/3.mp3", cover:"summer/cover.jpg", numb:3, count:9},
	{name:"What is Love?", src:"summer/4.mp3", cover:"summer/cover.jpg", numb:4, count:9},
	{name:"SWEET TALKER", src:"summer/5.mp3", cover:"summer/cover.jpg", numb:5, count:9},
	{name:"HO!", src:"summer/6.mp3", cover:"summer/cover.jpg", numb:6, count:9},
	{name:"DEJAVU", src:"summer/7.mp3", cover:"summer/cover.jpg", numb:7, count:9},
	{name:"SAY YES", src:"summer/8.mp3", cover:"summer/cover.jpg", numb:8, count:9},
	{name:"STUCK", src:"summer/9.mp3", cover:"summer/cover.jpg", numb:9, count:9},
	{name:"Heart Shaker", src:"merry/1.mp3", cover:"merry/cover.jpg", numb:1, count:15},
	{name:"Merry & Happy", src:"merry/2.mp3", cover:"merry/cover.jpg", numb:2, count:15},
	{name:"LIKEY", src:"merry/3.mp3", cover:"merry/cover.jpg", numb:3, count:15},
	{name:"거북이", src:"merry/4.mp3", cover:"merry/cover.jpg", numb:4, count:15},
	{name:"MISSING U", src:"merry/5.mp3", cover:"merry/cover.jpg", numb:5, count:15},
	{name:"WOW", src:"merry/6.mp3", cover:"merry/cover.jpg", numb:6, count:15},
	{name:"FFW", src:"merry/7.mp3", cover:"merry/cover.jpg", numb:7, count:15},
	{name:"DING DONG", src:"merry/8.mp3", cover:"merry/cover.jpg", numb:8, count:15},
	{name:"24/7", src:"merry/9.mp3", cover:"merry/cover.jpg", numb:9, count:15},
	{name:"날 바라바라봐", src:"merry/10.mp3", cover:"merry/cover.jpg", numb:10, count:15},
	{name:"ROLLIN’", src:"merry/11.mp3", cover:"merry/cover.jpg", numb:11, count:15},
	{name:"LOVE LINE", src:"merry/12.mp3", cover:"merry/cover.jpg", numb:12, count:15},
	{name:"힘내! (DON’T GIVE UP)", src:"merry/13.mp3", cover:"merry/cover.jpg", numb:13, count:15},
	{name:"널 내게 담아", src:"merry/14.mp3", cover:"merry/cover.jpg", numb:14, count:15},
	{name:"잘자요 굿나잇", src:"merry/15.mp3", cover:"merry/cover.jpg", numb:15, count:15},
	{name:"SIGNAL", src:"signal/1.mp3", cover:"signal/cover.jpg", numb:1, count:6},
	{name:"하루에 세번", src:"signal/2.mp3", cover:"signal/cover.jpg", numb:2, count:6},
	{name:"ONLY 너", src:"signal/3.mp3", cover:"signal/cover.jpg", numb:3, count:6},
	{name:"HOLD ME TIGHT", src:"signal/4.mp3", cover:"signal/cover.jpg", numb:4, count:6},
	{name:"EYE EYE EYES", src:"signal/5.mp3", cover:"signal/cover.jpg", numb:5, count:6},
	{name:"SOMEONE LIKE ME", src:"signal/6.mp3", cover:"signal/cover.jpg", numb:6, count:6},
	{name:"KNOCK KNOCK", src:"coast/1.mp3", cover:"coast/cover.jpg", numb:1, count:13},
	{name:"녹아요", src:"coast/2.mp3", cover:"coast/cover.jpg", numb:2, count:13},
	{name:"TT", src:"coast/3.mp3", cover:"coast/cover.jpg", numb:3, count:13},
	{name:"1 TO 10", src:"coast/4.mp3", cover:"coast/cover.jpg", numb:4, count:13},
	{name:"PONYTAIL", src:"coast/5.mp3", cover:"coast/cover.jpg", numb:5, count:13},
	{name:"JELLY JELLY", src:"coast/6.mp3", cover:"coast/cover.jpg", numb:6, count:13},
	{name:"PIT-A-PAT", src:"coast/7.mp3", cover:"coast/cover.jpg", numb:7, count:13},
	{name:"NEXT PAGE", src:"coast/8.mp3", cover:"coast/cover.jpg", numb:8, count:13},
	{name:"ONE IN A MILLION", src:"coast/9.mp3", cover:"coast/cover.jpg", numb:9, count:13},
	{name:"TT (TAK Remix)", src:"coast/10.mp3", cover:"coast/cover.jpg", numb:10, count:13},
	{name:"OOH-AHH하게 (Inst.)", src:"coast/11.mp3", cover:"coast/cover.jpg", numb:11, count:13},
	{name:"CHEER UP (Inst.)", src:"coast/12.mp3", cover:"coast/cover.jpg", numb:12, count:13},
	{name:"TT (Inst.)", src:"coast/13.mp3", cover:"coast/cover.jpg", numb:13, count:13},
	{name:"CHEER UP", src:"page/1.mp3", cover:"page/cover.jpg", numb:1, count:7},
	{name:"소중한 사랑", src:"page/2.mp3", cover:"page/cover.jpg", numb:2, count:7},
	{name:"Touchdown", src:"page/3.mp3", cover:"page/cover.jpg", numb:3, count:7},
	{name:"툭하면 톡", src:"page/4.mp3", cover:"page/cover.jpg", numb:4, count:7},
	{name:"Woohoo", src:"page/5.mp3", cover:"page/cover.jpg", numb:5, count:7},
	{name:"Headphone 써", src:"page/6.mp3", cover:"page/cover.jpg", numb:6, count:7},
	{name:"I’m gonna be a star", src:"page/7.mp3", cover:"page/cover.jpg", numb:7, count:7},
	{name:"OOH-AHH하게", src:"begin/1.mp3", cover:"begin/cover.jpg", numb:1, count:6},
	{name:"다시 해줘", src:"begin/2.mp3", cover:"begin/cover.jpg", numb:2, count:6},
	{name:"미쳤나봐", src:"begin/3.mp3", cover:"begin/cover.jpg", numb:3, count:6},
	{name:"Truth", src:"begin/4.mp3", cover:"begin/cover.jpg", numb:4, count:6},
	{name:"Candy Boy", src:"begin/5.mp3", cover:"begin/cover.jpg", numb:5, count:6},
	{name:"Like a Fool", src:"begin/6.mp3", cover:"begin/cover.jpg", numb:6, count:6},
	{name:"POP!", src:"im/1.mp3", cover:"im/cover.jpg", numb:1, count:7},
	{name:"NO PROBLEM (Feat. 필릭스 of Stray Kids)", src:"im/2.mp3", cover:"im/cover.jpg", numb:2, count:7},
	{name:"LOVE COUNTDOWN (Feat. 원슈타인)", src:"im/3.mp3", cover:"im/cover.jpg", numb:3, count:7},
	{name:"CANDYFLOSS", src:"im/4.mp3", cover:"im/cover.jpg", numb:4, count:7},
	{name:"ALL OR NOTHING", src:"im/5.mp3", cover:"im/cover.jpg", numb:5, count:7},
	{name:"HAPPY BIRTHDAY TO YOU", src:"im/6.mp3", cover:"im/cover.jpg", numb:6, count:7},
	{name:"노을만 예쁘다", src:"im/7.mp3", cover:"im/cover.jpg", numb:7, count:7}
	
];
  
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
 
  
  var musicrandom = music.slice(0);
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