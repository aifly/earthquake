var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	arrow: './assets/images/arrow.png',
	split: './assets/images/split.png',
	stone: './assets/images/stone.png',
	safe: './assets/images/safe.png',
}


var arr = [];
for (var attr in imgs) {
	arr.push(imgs[attr]);
}


var levels = [
		
	{
		duration:4
	},
	{
		duration:3
	},
	{
		duration:2
	},
	{
		duration:1
	}

];
 
	
var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
}