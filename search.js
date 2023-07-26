var input = document.getElementById("search1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("butt").click();
  }
});

 var result = music.map(item => item.name);
 var result1 = result.map(e => e.toLowerCase());
 butt.onclick = function() {
    var usertrack = document.getElementById('search1').value;
	var usertrack1 = usertrack.toLowerCase();
	mus = result1.indexOf(usertrack1);
function findPartial( a, s ){
  for( var i = 0; i < a.length; ++i )
    if( a[i].indexOf( s ) >= 0 )
		return i;
  return -1;
}
if (mus == -1){
mus = findPartial( result1, usertrack1 );
}
load ();
list();
}; 