class Stone{
	constructor(option={}){

		this.x = option.x || 0;
		this.y = option.y || 0;
		this.w = option.w || 94;
		this.h = option.h || 50;
		this.scale = option.scale || 1;

		this.maxHeight = Math.random() * window.innerHeight;

		this.iNow = 0;

		this.game = option.game;

		this.key = option.key || 'stone';

		this.render();
		this.init();
		

	}

	init(){

		//this.stone.y = -200;
		this.speed = Math.random()*408 + 202;

		//this.delay = (Math.random() * 700 + 10) | 0;
		
	}

	render(){
		var stone = this.game.add.sprite(this.x,this.y,this.key);
		stone.width  = this.w*this.scale;
		stone.height = this.h*this.scale;
		if(this.key === 'split'){
			stone.anchor.setTo(.5, .5);
			stone.rotation = Math.random()*360*Math.PI/180;
		}
		//stone.alpha = 0;
		
		this.stone = stone;
	}

	update(){
		var {stone} = this;
		stone.x = this.x;
		stone.y = this.y;
	}
}

/*************************************************************/

class Split extends Stone{
	constructor(option){
		super(option);
		this.key = option.key || 'split';
	}
}

class SafeArea extends Stone{
	constructor(option){
		super(option)
		this.key = option.key || 'safe';
	}


}



export default {Stone,Split,SafeArea}