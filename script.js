function Display(){
	
	let time=true;
	
	this.Play = () => {
	control.animate();	
	if (time) control.timer();
 	window.addEventListener('click', control.point, false);
		document.getElementById("pause").disabled = false;
		document.getElementById("pause").style.background = "white";
		document.getElementById("play").disabled = true;
		document.getElementById("play").style.background = "#98DCD8";
		 control.pause_press = false;
 }
	
  this.Start = () => {
	  
	control.initFish();
	control.animate();	
	 control.timer();
	 document.getElementById("start").disabled = true;
	  document.getElementById("start").style.background = "#98DCD8";
	  document.getElementById("play").disabled = true;
	  document.getElementById("play").style.background = "#98DCD8";
	  document.getElementById("pause").disabled = false;
	  document.getElementById("pause").style.background = "white";
	   control.pause_press = false;
	   console.log(` start btn ${control.pause_press}`);

 }
 
 this.Pause = () => {
	 
	clearInterval(Timer); 
	  
	clearInterval(Timer2); 
	window.removeEventListener('click', control.point, false);
	document.getElementById("play").disabled = false;
	document.getElementById("play").style.background = "white";
	 document.getElementById("pause").disabled = true;
	 document.getElementById("pause").style.background = "#98DCD8";
	 
	 control.pause_press = true;
	 console.log(` pause btn ${control.pause_press}`);
	
 }
	
	this.test = () => {
		document.getElementById("gg").style.visibility = "hidden";
		control.game_restart();
		control.initFish();
		control.animate();
		control.timer();

		document.getElementById("start").disabled = true;
		document.getElementById("start").style.background = "#98DCD8";
		document.getElementById("play").disabled = true;
		document.getElementById("play").style.background = "#98DCD8";
		
				}
	
	
}







function Controller(){
	//Fish.call(this);
	let n=100;
	let fish= new Array(n);
	let points=0;
	let StopPress = true;
	this.pause_press = false;
	 
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
	
		
		ct.drawImage(img , x, y, size, size);
	
  }




	this.animate = function(){
		Timer=setInterval(() => {
			clearBg();





			/*	for (let xs = 0.5; xs < 400; xs += 10) {
				  ct.moveTo(xs, 0);
				  ct.lineTo(xs, 400);
				}

				for (let ys = 0.5; ys < 400; ys += 10) {
				  ct.moveTo(0, ys);
				  ct.lineTo(400, ys);
				}

				ct.strokeStyle = "#888";
				ct.stroke(); */
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
				fish[i].speed=3;
				break;
				
				 case 1:
		
			  fish[i].size=40;
			    fish[i].point_f=3;
				fish[i].speed=4;
				break;
				
				 case 2:
			
			  fish[i].size=30;
			    fish[i].point_f=5;
				fish[i].speed=5;
				break;
	
		}
	
	
	drawFish(fish[i].x, fish[i].y, fish[i].size);
	//console.log(` init fish[${i}] x: ${fish[i].x}  y:${fish[i].y} `);
	
	}
	

	}
 
this.timer = () => {
	let min=1;
	 let sec=60;
	Timer2=setInterval(() => {
		sec--;
		if (sec==0) {sec = 60;
		min--;}

		document.getElementById('clock').value = ` ${min} : ${sec}`;
		if ((sec==60)&&(min==-1)) {
			game_over();
		}		
		}, 500);
	
	
	
	
}

	this.game_restart= () =>  {
		clearInterval(Timer);
		clearInterval(Timer2);
		for(var i=0; i < n; i++)
		{ fish[i] = undefined;}

		document.getElementById("start").disabled = false;
		document.getElementById("play").disabled = false;
		document.getElementById("pause").disabled = false;
		document.getElementById("start").style.background = "white";
		document.getElementById("play").style.background = "white";
		document.getElementById("pause").style.background = "white";
		//console.log(points);
		points = 0;
		//console.log(points);
		let p = document.getElementById('points').innerHTML = `${points}`;
		pause_press = false;
	}

	function game_over() {
	clearInterval(Timer); 
	clearInterval(Timer2);

	document.getElementById("gg").style.visibility = "visible";
		
		
	for(var i=0; i < n; i++)
	{ fish[i] = undefined;} 
		
		document.getElementById("start").disabled = true;
		document.getElementById("play").disabled = true;
		document.getElementById("pause").disabled = true;

		document.getElementById("start").style.background = "#98DCD8";
		document.getElementById("play").style.background = "#98DCD8";
		document.getElementById("pause").style.background = "#98DCD8";

		document.getElementById('clock').value  ="0:0";
	}
	
	



this.point = (e) => {
	
	 console.log(` point btn ${this.pause_press}`);
	if (!this.pause_press){	
	//	mouseX = event.clientX - pos.x_p;
	//	mouseY = event.clientY - pos.y_p;
		
		//console.log(e.offsetX+' offset '+e.offsetY);
	//	console.log(mouseX+' mouse '+mouseY);
		//console.log(event.clientX+' event.clientX '+event.clientY);
		//console.log(pos.x_p+' pos.x_p '+pos.y_p);
	 for(let i=0; i < n; i++){
			//console.log(` point ${fish[i].x}  : ${fish[i].y}`);
			
			
		//	if( mouseX>fish[i].x-fish[i].size && mouseX<fish[i].x+fish[i].size  && mouseY>fish[i].y-fish[i].size && mouseY<fish[i].y+fish[i].size )
			if( (e.offsetX<(fish[i].x+fish[i].size)) && (e.offsetX>fish[i].x)  && (e.offsetY>fish[i].y) && (e.offsetY<fish[i].y+fish[i].size) )
			{
			
			fish[i].Setlife(false);
			let p = document.getElementById('points');
			points=points+fish[i].point_f;
			//ole.log( `  Point for fish fish ${fish[i].point_f} , total ${points}`);
			p.innerHTML = `${points}`;


			}


	 }
	 
	}


}
	
}	
	
	




function Fish(){
	this.x = Math.floor(Math.random()*400)*(-1)*(Math.floor(Math.random()*100));
	this.y =  Math.floor(Math.random()*(300));
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
var ct
window.addEventListener("load", function (){
		
	canvas = document.getElementById("game_canvas");
	ct = canvas.getContext("2d");
	
		document.getElementById("play").disabled = true;
		document.getElementById("pause").disabled = true;

		
		document.getElementById("play").style.background = "#98DCD8";
		document.getElementById("pause").style.background = "#98DCD8";
	
	
	
	 disp = new Display();
	 control = new Controller();

	const canRect = canvas.getBoundingClientRect();
	const scale = window.devicePixelRatio;


	canvas.width = canRect.width * scale;
	canvas.height = canRect.height * scale;
	ct.scale(scale, scale);
//	console.log(`${canvas.width} , ${canvas.height}`)
	
	canvas.addEventListener('click', control.point, false);
	canvas.addEventListener("keydown",  control.keyDownHandler, false);
	
	



}, false);
