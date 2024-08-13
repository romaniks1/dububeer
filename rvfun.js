function rvfun(){
document.getElementById("back").style.backgroundImage = "url(https://pbs.twimg.com/media/GQrTqj4bcAAUXii?format=jpg&name=4096x4096)";
document.getElementById("yt").src = "https://www.youtube.com/embed/videoseries?list=PLmSYmpvvW-3G8hfgooYK2aYxu8CnQ7u-c";
randomcheck = 0;
music = [
	{name:"Birthday", src:"reve2022/1.mp3", cover:"reve2022/cover.jpg", numb:1, count:5},
	{name:"BYE BYE", src:"reve2022/2.mp3", cover:"reve2022/cover.jpg", numb:2, count:5},
	{name:"롤러코스터 (On A Ride)", src:"reve2022/3.mp3", cover:"reve2022/cover.jpg", numb:3, count:5},
	{name:"ZOOM", src:"reve2022/4.mp3", cover:"reve2022/cover.jpg", numb:4, count:5},
	{name:"Celebrate", src:"reve2022/5.mp3", cover:"reve2022/cover.jpg", numb:5, count:5},
	{name:"Marionette", src:"bloom/1.mp3", cover:"bloom/cover.jpg", numb:1, count:11},
	{name:"WILDSIDE", src:"bloom/2.mp3", cover:"bloom/cover.jpg", numb:2, count:11},
	{name:"SAPPY", src:"bloom/3.mp3", cover:"bloom/cover.jpg", numb:3, count:11},
	{name:"Jackpot", src:"bloom/4.mp3", cover:"bloom/cover.jpg", numb:4, count:11},
	{name:"#Cookie Jar", src:"bloom/5.mp3", cover:"bloom/cover.jpg", numb:5, count:11},
	{name:"Snap Snap", src:"bloom/6.mp3", cover:"bloom/cover.jpg", numb:6, count:11},
	{name:"Sayonara", src:"bloom/7.mp3", cover:"bloom/cover.jpg", numb:7, count:11},
	{name:"Aitai-tai", src:"bloom/8.mp3", cover:"bloom/cover.jpg", numb:8, count:11},
	{name:"Swimming Pool", src:"bloom/9.mp3", cover:"bloom/cover.jpg", numb:9, count:11},
	{name:"‘Cause it’s you", src:"bloom/10.mp3", cover:"bloom/cover.jpg", numb:10, count:11},
	{name:"Color of Love", src:"bloom/11.mp3", cover:"bloom/cover.jpg", numb:11, count:11},
	{name:"Feel My Rhythm", src:"rvfeel/1.mp3", cover:"rvfeel/cover.jpg", numb:1, count:6},
	{name:"Rainbow Halo", src:"rvfeel/2.mp3", cover:"rvfeel/cover.jpg", numb:2, count:6},
	{name:"Beg For Me", src:"rvfeel/3.mp3", cover:"rvfeel/cover.jpg", numb:3, count:6},
	{name:"BAMBOLEO", src:"rvfeel/4.mp3", cover:"rvfeel/cover.jpg", numb:4, count:6},
	{name:"Good, Bad, Ugly", src:"rvfeel/5.mp3", cover:"rvfeel/cover.jpg", numb:5, count:6},
	{name:"In My Dreams", src:"rvfeel/6.mp3", cover:"rvfeel/cover.jpg", numb:6, count:6},
	{name:"Queendom", src:"dom/1.mp3", cover:"dom/cover.jpg", numb:1, count:6},
	{name:"Pose", src:"dom/2.mp3", cover:"dom/cover.jpg", numb:2, count:6},
	{name:"Knock On Wood", src:"dom/3.mp3", cover:"dom/cover.jpg", numb:3, count:6},
	{name:"Better Be", src:"dom/4.mp3", cover:"dom/cover.jpg", numb:4, count:6},
	{name:"Pushin’ N Pullin’", src:"dom/5.mp3", cover:"dom/cover.jpg", numb:5, count:6},
	{name:"다시, 여름 (Hello, Sunset)", src:"dom/6.mp3", cover:"dom/cover.jpg", numb:6, count:6},
	{name:"Psycho", src:"final/1.mp3", cover:"final/cover.jpg", numb:1, count:16},
	{name:"In & Out", src:"final/2.mp3", cover:"final/cover.jpg", numb:2, count:16},
	{name:"Remember Forever", src:"final/3.mp3", cover:"final/cover.jpg", numb:3, count:16},
	{name:"눈 맞추고, 손 맞대고 (Eyes Locked, Hands Locked)", src:"final/4.mp3", cover:"final/cover.jpg", numb:4, count:16},
	{name:"Ladies Night", src:"final/5.mp3", cover:"final/cover.jpg", numb:5, count:16},
	{name:"Jumpin’", src:"final/6.mp3", cover:"final/cover.jpg", numb:6, count:16},
	{name:"Love Is The Way", src:"final/7.mp3", cover:"final/cover.jpg", numb:7, count:16},
	{name:"카풀 (Carpool)", src:"final/8.mp3", cover:"final/cover.jpg", numb:8, count:16},
	{name:"음파음파 (Umpah Umpah)", src:"final/9.mp3", cover:"final/cover.jpg", numb:9, count:16},
	{name:"LP", src:"final/10.mp3", cover:"final/cover.jpg", numb:10, count:16},
	{name:"안녕, 여름 (Parade)", src:"final/11.mp3", cover:"final/cover.jpg", numb:11, count:16},
	{name:"친구가 아냐 (Bing Bing)", src:"final/12.mp3", cover:"final/cover.jpg", numb:12, count:16},
	{name:"Milkshake", src:"final/13.mp3", cover:"final/cover.jpg", numb:13, count:16},
	{name:"Sunny Side Up!", src:"final/14.mp3", cover:"final/cover.jpg", numb:14, count:16},
	{name:"짐살라빔 (Zimzalabim)", src:"final/15.mp3", cover:"final/cover.jpg", numb:15, count:16},
	{name:"La Rouge (Special Track)", src:"final/16.mp3", cover:"final/cover.jpg", numb:16, count:16}
	
];
musicrandom = music.slice(0);
mus = 0;
load();
list();
}
