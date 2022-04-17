function Display(){
	
	let time=true;
	
	this.Play = () => {
	control.animate();	
	if (time) control.timer();
 	window.addEventListener('click', control.point, false);
 }
	
  this.Start = () => {
	  
	control.initFish();
	control.animate();	
	 control.timer();
 
 }
 
 this.Pause = () => {
	 
	clearInterval(Timer); 
	  
	clearInterval(Timer2); 
	window.removeEventListener('click', control.point, false);
	
 }
	
	this.test = () => {
		time = false;
		control.initFish();
		control.animate();	
				}
	
	
}







function Controller(){
	//Fish.call(this);
	let n=100;
	let fish= new Array(n);
	let points=0;
	let StopPress = true;
	
	 
	this.keyDownHandler = function(e) {
     if(e.keyCode == 32) {
    	 if( StopPress) {
			StopPress = false;
		   disp.Pause();
	   }
	   else{ 
	   StopPress = true; 
	   disp.Play();}
    }
	}
		
function clearBg(){
	ct.clearRect(0,0,canvas.width, canvas.height);
}
	 
	 
 function drawFish(x,y,size){
		this.img = new Image(); ;
		img.src = 'img/fish1.png'; 
		ct.drawImage(img, x,y, size,size);
  }
  
  
  
  
	
  this.animate = function(){
		Timer=setInterval(() => {
		clearBg();
		for(let i=0; i < n; i++){
		if (fish[i].Getlife()){
		fish[i].x= fish[i].MoveX(fish[i].x,fish[i].speed);	
		drawFish(fish[i].x, fish[i].y, fish[i].size);
		}
		else {
			fish[i].y=fish[i].Delete(fish[i].y);
			drawFish(fish[i].x, fish[i].y, fish[i].size);
		}
		
	}
		}, 20);
		
	
	 
 }
 
 this.initFish = function(){

	for(let i=0; i < n; i++)
	{
		fish[i] = new Fish();
		switch (fish[i].size_rand) { 
			  case 0:
			  fish[i].size=50;
			  fish[i].point_f=1;
				fish[i].speed=1;
				break;
				
				 case 1:
		
			  fish[i].size=40;
			    fish[i].point_f=3;
				fish[i].speed=2;
				break;
				
				 case 2:
			
			  fish[i].size=30;
			    fish[i].point_f=5;
				fish[i].speed=3;
				break;
	
		}
	drawFish(fish[i].x, fish[i].y, fish[i].size);
	
	}
	

	}
 
this.timer = () => {
	let min=1;
	 let sec=60;
	Timer2=setInterval(() => {
		sec--;
		if (sec==0) {sec = 60;
		min--;}
		document.clockform.clock.value =min+":"+sec;
		
		if ((sec==60)&&(min==-1)) {
			game_over();
		}		
		}, 500);
	
	
	
	
}	
	function game_over() {
	clearInterval(Timer); 
	clearInterval(Timer2); 
		
		let g = document.getElementById('gg');
		g.innerHTML = "Game Over";
		
		
	for(var i=0; i < n; i++)
	{ fish[i] = undefined;} 
		
		document.getElementById("start").disabled = true;
		document.getElementById("play").disabled = true;
		document.getElementById("pause").disabled = true;
		document.getElementById("test").disabled = true;
		document.getElementById("start").style.background = "#98DCD8";
		document.getElementById("play").style.background = "#98DCD8";
		document.getElementById("pause").style.background = "#98DCD8";
		document.getElementById("test").style.background = "#98DCD8";
		document.clockform.clock.value ="0:0";
	}
	
	
	function findOffset(obj) {
		let x_p;
		let y_p;
		let curX = curY = 0;
		if (obj.offsetParent) {
        do {
            curX += obj.offsetLeft;
            curY += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return {
	x_p:curX,
	y_p:curY};
    }
}


this.point = () => {
	
	 let pos = findOffset(canvas);
		//alert(pos.x_p+' пос'+pos.y_p);
		mouseX = event.clientX - pos.x_p;
		mouseY = event.clientY - pos.y_p;
		//alert(mouseX+' my coords '+mouseY);

		//alert(fish.x+'fish'+fish.y);

	 for(let i=0; i < n; i++){
			if( mouseX>fish[i].x-fish[i].size && mouseX<fish[i].x+fish[i].size  && mouseY>fish[i].y-fish[i].size && mouseY<fish[i].y+fish[i].size )
			{
			//	alert(fish[i].x+'fish'+fish[i].y);
			fish[i].Setlife(false);
			let p = document.getElementById('points');
			points=points+fish[i].point_f;
			p.innerHTML = `${points+fish[i].point_f}`;


			}


	 }



}
	
}	
	
	




function Fish(){
	this.x = (-1)*Math.floor(Math.random()*2500);
	this.y =  Math.floor(Math.random()*(canvas.height));
	this.point_f;
	this.size_rand=Math.floor(Math.random()*3);
	this.size;
	let life=true;
	this.speed=Math.floor(Math.random()*3);;
//	this.f_img = new Image(); 
//	f_img.src = 'img/fish1.png'; 
	
	this.Getlife = () => life;
	
		
	this.Setlife = (l) => { if (life) life = l };	
		
	
	this.MoveX = (x, sp) => {
		x=x+sp;
		return x;
	}
	
	
	this.Delete = (y) => {
		y=y-8;
		return y;	
	}
	
	
	
	
	
	
	
	
}

var disp;
var control;

window.addEventListener("load", function (){
	
	canvas = document.getElementById("game_canvas");
	ct = canvas.getContext("2d");
	canvas.width = 700;
	canvas.height = 300;
	 disp = new Display();
	 control = new Controller();

	
	
	window.addEventListener('click', control.point, false);
	window.addEventListener("keydown",  control.keyDownHandler, false);
	
	



}, false);