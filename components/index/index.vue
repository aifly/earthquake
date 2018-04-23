<template>
	<div v-tap='[entry]'  class="lt-full zmiti-index-main-ui "   :class="{'show':show}">
		
		<div class="zmiti-title">
			<img :src="imgs.title" @load='initCanvas($event)'  />
		</div>

		<div class="zmiti-index">
			<img :src="imgs.index">
		</div>
		<canvas ref='canvas' class="zmiti-canvas" :width="viewW" :height='viewH/2.8'></canvas>
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	import Toast from '../toast/toast';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				toastMsg:'',
				cloudIndex:0,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				showMasks:false,

			}
		},
		components:{
			 Toast
		},
		
		methods:{

			initCanvas(e){
				var canvas = this.$refs['canvas'];
				var context = canvas.getContext('2d');

				context.drawImage(e.target,65,20);


			},

			imgStart(e){
				e.preventDefault(); 
			},

			entry(){

				
			}
			
		},
		mounted(){


			var {obserable} = this;

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			})


			setTimeout(()=>{
				//this.entry();
			},100)

		}
	}
</script>