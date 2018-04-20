<template>
	<transition name='main'>
		<div class="lt-full zmiti-main-main-ui " :style="{WebkitAnimationDuration:levels[index].duration+'s'}"  :class="{'show':show}" ref='page'>
			
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import $ from 'jquery';
	import {mainGameState} from './gamestate';

	import {Stone} from './obstacle';
	export default {
		props:['obserable','pv','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				showTeam:false,
				showQrcode:false,
				show:true,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				levels:window.levels,
				index:0
			}
		},
		components:{
		},
		
		methods:{
			initCanvas(){
				var game = new Phaser.Game(this.viewW,this.viewH,Phaser.CANVAS,this.$refs['page']);
				this.game = game;
				window.game = game;

				this.game.state.add('mainstate',mainGameState);
				this.game.state.start('mainstate');
			},
		},
	
		mounted(){

			window.s = this;
			
			this.initCanvas();

			this.transX = this.offsetLeft / 2 *-1;
			var {obserable} = this;

			obserable.on('toggleMain',(data)=>{
				this.show = data.show;
				if(data.index){
					this.index = data.index;
					this.initCanvas();
				}
			})


			var s = this;
			s.lastX = '';
			s.lastY = '';
			var i =0 ;
			var startX,startY,
				maxValue=100;

 			window.addEventListener("deviceorientation", function(event) {
			      
			     // document.title = event.beta|0;
			      i++;
			      if(i===1){
			      	startY = event.beta;
			      }

			      var x =  (event.gamma|0)*1.5,
			      	  y = event.beta|0;

			      if(x<-maxValue){
			      	x=-maxValue;
			      }
			      if(x>maxValue){
			      	x=maxValue
			      }
			     
 

			      s.transX = x - 100 ;
			      s.transY = y;

			}, true);



		}
	}
</script>