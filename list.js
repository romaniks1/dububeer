const btn = document.getElementById('btn');

let index = 0;
var mouse = 1;
const colors = ['salmon', '#FCC89B'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';
  if (index >= colors.length - 1){
  index = 0;
  mouse = 1;
}
  else{
  index = index + 1;
  mouse = 0;
  }
});

btn.onmouseover = function(event) {
if(index == 0){ 
  let target = event.target;
  target.style.background = '#FF5FA2';
  }
  else{
  let target = event.target;
  target.style.background = '#b54574';
  }
  }
  btn.onmouseout = function(event) {
  let target = event.target;
  target.style.background = colors[mouse];
  }


tracklist1.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist1').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});

  
tracklist2.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist2').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist3.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist3').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist4.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist4').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist5.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist5').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist6.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist6').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist7.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist7').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist8.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist8').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist9.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist9').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist10.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist10').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist11.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist11').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist12.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist12').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist13.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist13').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist14.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist14').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist15.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist15').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist16.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist16').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist17.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist17').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist18.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist18').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});
tracklist19.addEventListener('click', function onClick() {
for (i=0; i<music.length; i++){
document.getElementById('tracklist20').innerHTML = music[i].name;
if (document.getElementById('tracklist19').innerHTML == document.getElementById('tracklist20').innerHTML){
mus = i;
load();
list();
}
}
});

